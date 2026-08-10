import { describe, it, expect } from "vitest";
import { hashPassword, verifyPassword, isBcryptHash } from "./adminPassword";

describe("adminPassword", () => {
  it("hashes into a bcrypt string", async () => {
    const hash = await hashPassword("hunter2");
    expect(isBcryptHash(hash)).toBe(true);
    expect(hash).not.toBe("hunter2");
  });

  it("verifies a correct password against a bcrypt hash", async () => {
    const hash = await hashPassword("hunter2");
    const result = await verifyPassword("hunter2", hash);
    expect(result.matches).toBe(true);
    expect(result.needsRehash).toBe(false);
  });

  it("rejects a wrong password against a bcrypt hash", async () => {
    const hash = await hashPassword("hunter2");
    const result = await verifyPassword("wrong", hash);
    expect(result.matches).toBe(false);
  });

  it("verifies a legacy plaintext password and flags it for rehash", async () => {
    const result = await verifyPassword("hunter2", "hunter2");
    expect(result.matches).toBe(true);
    expect(result.needsRehash).toBe(true);
  });

  it("rejects a wrong legacy plaintext password without flagging rehash", async () => {
    const result = await verifyPassword("wrong", "hunter2");
    expect(result.matches).toBe(false);
    expect(result.needsRehash).toBe(false);
  });
});
