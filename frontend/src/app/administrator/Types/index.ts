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
  content: string | string[] | any;
  platform: string | any;
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
  description: String;
  patronage: "BASIC" | "PRO";
  PhoneNumber: String;
  address: string;
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
  optKey: Number;
  expiresAt: Date;
};
export type Status = "Идэвхтэй" | "Хүлээгдэж буй" | "Идэвхгүй";

export interface Company {
  id: number;
  name: string;
  owner: string;
  status: Status;
  users: number;
}

export interface RecentUser {
  id: number;
  name: string;
  role: string;
  time: string;
  avatar: string;
}

export interface ActivityItem {
  id: number;
  color: "blue" | "yellow" | "green";
  title: string;
  description: string;
  time: string;
}

export type NavItem =
  | "Хяналтын самбар"
  | "Компаниуд"
  | "Хэрэглэчид"
  | "Админ"
  | "Тохиргоо";
