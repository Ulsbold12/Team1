import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Request, Response } from "express";
import { aiLimiting, BASIC_PLAN_MONTHLY_AI_LIMIT } from "./aiLimiting";

const prismaMock = vi.hoisted(() => ({
  client: { findUnique: vi.fn() },
  organization: { findUnique: vi.fn() },
  aiUsage: { count: vi.fn(), create: vi.fn() },
}));

vi.mock("../../lib/prisma", () => ({ default: prismaMock }));

function mockRes() {
  const res: Partial<Response> = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  return res as Response;
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("aiLimiting", () => {
  it("rejects requests with no authenticated user", async () => {
    const req = { clerkUserId: undefined } as unknown as Request;
    const res = mockRes();
    const next = vi.fn();

    await aiLimiting(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("blocks a BASIC org once the monthly cap is reached", async () => {
    prismaMock.client.findUnique.mockResolvedValue({ id: "client_1", orgId: "org_1" });
    prismaMock.organization.findUnique.mockResolvedValue({ id: "org_1", patronage: "BASIC" });
    prismaMock.aiUsage.count.mockResolvedValue(BASIC_PLAN_MONTHLY_AI_LIMIT);

    const req = { clerkUserId: "client_1" } as unknown as Request;
    const res = mockRes();
    const next = vi.fn();

    await aiLimiting(req, res, next);

    expect(res.status).toHaveBeenCalledWith(429);
    expect(next).not.toHaveBeenCalled();
    expect(prismaMock.aiUsage.create).not.toHaveBeenCalled();
  });

  it("allows a BASIC org under the monthly cap and records usage", async () => {
    prismaMock.client.findUnique.mockResolvedValue({ id: "client_1", orgId: "org_1" });
    prismaMock.organization.findUnique.mockResolvedValue({ id: "org_1", patronage: "BASIC" });
    prismaMock.aiUsage.count.mockResolvedValue(BASIC_PLAN_MONTHLY_AI_LIMIT - 1);

    const req = { clerkUserId: "client_1" } as unknown as Request;
    const res = mockRes();
    const next = vi.fn();

    await aiLimiting(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(prismaMock.aiUsage.create).toHaveBeenCalledWith({
      data: { clientId: "client_1", orgId: "org_1" },
    });
  });

  it("never blocks a PRO org regardless of usage count", async () => {
    prismaMock.client.findUnique.mockResolvedValue({ id: "client_2", orgId: "org_2" });
    prismaMock.organization.findUnique.mockResolvedValue({ id: "org_2", patronage: "PRO" });

    const req = { clerkUserId: "client_2" } as unknown as Request;
    const res = mockRes();
    const next = vi.fn();

    await aiLimiting(req, res, next);

    expect(prismaMock.aiUsage.count).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledOnce();
  });
});
