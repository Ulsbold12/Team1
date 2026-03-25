import { Company, RecentUser, ActivityItem, OrganizationInterface, ClientType } from "../Types";

export const companies: Company[] = [
  {
    id: 1,
    name: "Acme Corp",
    owner: "John Doe",
    status: "Идэвхтэй",
    users: 0,
  },
  {
    id: 2,
    name: "Global Tech",
    owner: "Sarah Smith",
    status: "Хүлээгдэж буй",
    users: 0,
  },
  {
    id: 3,
    name: "Innovate Ltd",
    owner: "Mike Ross",
    status: "Идэвхтэй",
    users: 0,
  },
  {
    id: 4,
    name: "Delta Solutions",
    owner: "Jane Foster",
    status: "Идэвхгүй",
    users: 0,
  },
];

export const recentUsers: RecentUser[] = [
  {
    id: 1,
    name: "Felix Graham",
    role: "Компани хоорондын хэрэглэчийн лавлах",
    time: "2м өмнө",
    avatar: "FG",
  },
  {
    id: 2,
    name: "Anita Bell",
    role: "Компани хоорондын хэрэглэчийн лавлах",
    time: "14м өмнө",
    avatar: "AB",
  },
  {
    id: 3,
    name: "Marcus Wright",
    role: "Компани хоорондын хэрэглэчийн лавлах",
    time: "1ц өмнө",
    avatar: "MW",
  },
];

export const mockOrganizations: OrganizationInterface[] = [
  {
    id: "mock-org-1",
    name: "Acme Corp",
    industry: "TECH",
    emailAddress: "contact@acme.mn",
    phoneNumber: "99112233",
    address: "Улаанбаатар, Сүхбаатар дүүрэг",
    description: "Монголын тэргүүлэх технологийн компани",
    patronage: "PRO",
    createdAt: new Date("2024-01-15"),
    aiUsages: [],
    members: [],
  },
  {
    id: "mock-org-2",
    name: "Global Finance LLC",
    industry: "FINANCE",
    emailAddress: "info@globalfinance.mn",
    phoneNumber: "88224455",
    address: "Улаанбаатар, Баянзүрх дүүрэг",
    description: "Санхүүгийн үйлчилгээний компани",
    patronage: "BASIC",
    createdAt: new Date("2024-03-10"),
    aiUsages: [],
    members: [],
  },
  {
    id: "mock-org-3",
    name: "MedCare Health",
    industry: "HEALTHCARE",
    emailAddress: "hello@medcare.mn",
    phoneNumber: "77335566",
    address: "Улаанбаатар, Хан-Уул дүүрэг",
    description: "Эрүүл мэндийн үйлчилгээний байгууллага",
    patronage: "BASIC",
    createdAt: new Date("2024-06-01"),
    aiUsages: [],
    members: [],
  },
];

export const mockClients: ClientType[] = [
  {
    id: "mock-user-1",
    orgId: "mock-org-1",
    role: "EXECUTIVE",
    email: "dorj@acme.mn",
    firstname: "Дорж",
    lastname: "Батбаяр",
    createdAt: new Date("2024-01-15"),
    lastSeenAt: new Date(),
    ofOrg: mockOrganizations[0],
  },
  {
    id: "mock-user-2",
    orgId: "mock-org-1",
    role: "MANAGEMENT",
    email: "enkh@acme.mn",
    firstname: "Энхбаяр",
    lastname: "Гантулга",
    createdAt: new Date("2024-02-20"),
    lastSeenAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    ofOrg: mockOrganizations[0],
  },
  {
    id: "mock-user-3",
    orgId: "mock-org-2",
    role: "EXECUTIVE",
    email: "sara@globalfinance.mn",
    firstname: "Сараа",
    lastname: "Мөнхбат",
    createdAt: new Date("2024-03-10"),
    lastSeenAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    ofOrg: mockOrganizations[1],
  },
  {
    id: "mock-user-4",
    orgId: "mock-org-2",
    role: "MEMBER",
    email: "bold@globalfinance.mn",
    firstname: "Болд",
    lastname: "Наранбаатар",
    createdAt: new Date("2024-04-05"),
    lastSeenAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    ofOrg: mockOrganizations[1],
  },
  {
    id: "mock-user-5",
    orgId: "mock-org-3",
    role: "EXECUTIVE",
    email: "oyuna@medcare.mn",
    firstname: "Оюунаа",
    lastname: "Цэрэндорж",
    createdAt: new Date("2024-06-01"),
    lastSeenAt: new Date(Date.now() - 30 * 60 * 1000),
    ofOrg: mockOrganizations[2],
  },
];

export const activities: ActivityItem[] = [
  {
    id: 1,
    color: "blue",
    title: "Шинэ компани бүртгэлдээ",
    description: "Zenith Solutions платформд Enterprise зэрэглэлээр нэгдлээ.",
    time: "12:45 PM",
  },
  {
    id: 2,
    color: "yellow",
    title: "Төлбөрийн мэдэгдэл",
    description:
      "Delta Solutions руу төлбөр амжилтгүй болсон тухай мэдэгдэл илгээв.",
    time: "10:20 AM",
  },
  {
    id: 3,
    color: "green",
    title: "Хэрэглэчийн багц экспорт",
    description:
      "Acme Corp 150 хэрэглэчийн мэдэээллийг CSV файл руу экспортлов.",
    time: "өчигдөр",
  },
];
