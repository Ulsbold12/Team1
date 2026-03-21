export type ClientType = {
  id: string;
  orgId: string;
  role: "EXECUTIVE" | "MANAGEMENT" | "MEMBER";
  email: string;
  firstname: string;
  lastname: string;
  createdAt: Date;
};

export type FinanceType = {
  id: string;
  orgId: string;
  month?: Date;
};

export type FAnalysesType = {
  id: string;
  orgId: string;
  summary: string;
  categories?: any;
  tips: any;
  createdAt: Date;
};

export type Post = {
  id: string;
  orgId: string;
  title: string;
  content: any;
  platform: any;
  react: number;
  publishedAt: Date;
};

export interface OrganizationInterface {
  id: string;
  name: string;
  members?: ClientType[];
  industry:
    | "TECH"
    | "FINANCE"
    | "HEALTHCARE"
    | "EDUCATION"
    | "RETAIL"
    | "MANUFACTURING";
  financeData?: FinanceType[];
  financeAnalyses?: FAnalysesType[];
  posts?: Post[];
  createdAt: Date;
  emailAddress: string;
  description: string;
  patronage: "BASIC" | "PRO" | "ENTERPRISE";
  phoneNumber: string;
}

export type AdminType = {
  id: string;
  email: string;
  username: string;
  password?: string;
  createdAt: Date;
  lastAccessTime: Date;
};

export type InvCode = {
  optKey: number;
  expiresAt: Date;
};
