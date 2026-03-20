"use client";

import { useState, useEffect } from "react";
import Header from "../_parts/Header";
import { ControlSideBar } from "../_parts/ControlSideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserRoundCheck, Banknote, Building2, BanIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getClients, getCompanies } from "@/lib/adminApi";
import { OrganizationInterface, ClientType } from "../Types";
import { useAdmin } from "../provider/adminProvider";
import {
  Table,
  TableCell,
  TableBody,
  TableCaption,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function AdministratorPage() {
  const [loading, setLoading] = useState(false);
  const [org, setOrg] = useState<OrganizationInterface[]>([]);
  const [clients, setClients] = useState<ClientType[]>([]);
  const { fetchAuditLog, fetchCompaniesData } = useAdmin();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [companiesRes, usersRes] = await Promise.all([
          getCompanies(),
          getClients(),
        ]);
        console.log(companiesRes.data, usersRes.data);
        setOrg(companiesRes.data?.companyData);
        setClients(usersRes.data?.usersData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const TopViewPanels = [
    { label: "НИЙТ КОМПАНИУД", number: `${org.length}`, icon: Building2 },
    {
      label: "ИДЭВХИТЭЙ ХЭРЭГЛЭГЧИД",
      number: `${clients.length}`,
      icon: UserRoundCheck,
    },
    { label: "САР БҮРИЙН ОРЛОГО", number: `$ ${org.length}`, icon: Banknote },
  ];

  return (
    <>
      <div
        className={`w-full h-full flex flex-col lg:p-5 lg:gap-5 items-center`}
      >
        <h1 className="text-2xl font-bold p-2">Admin Control Panel</h1>
        {/*Leading three info decks*/}
        <div className={`w-full flex flex-col gap-2 p-5`}>
          <div className={`w-full grid grid-cols-3 gap-2`}>
            {TopViewPanels.map((p, i) => {
              const Icon = p.icon;
              return (
                <Card
                  className={`p-5 flex p-5 items-center w-full aspect-5/2`}
                  key={i}
                >
                  <p className="text-gray-500 text-[1em] w-full">{p.label}</p>
                  <p className="text-4xl font-bold">{p.number}</p>{" "}
                  <Icon className="" />
                </Card>
              );
            })}
          </div>
          {/*Top ranked org info deck*/}

          <div className="w-full flex flex-col justify-between gap-2">
            <div className="flex justify-between">
              <p className="font-bold">Компаниудын тойм</p>
              <Input placeholder="Search Company" className="w-fit"></Input>
            </div>

            <Card className={`w-full `}>
              {" "}
              <Table className="p-5">
                <TableCaption>Most recent companies</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">
                      Membership plan
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {org.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell className="font-medium px-2">{o.name}</TableCell>
                      <TableCell>
                        {o.members
                          ?.filter((m) => m.role === " EXECUTIVE")
                          .map((m) => (
                            <>{m.firstname}</>
                          ))}
                      </TableCell>
                      <TableCell>{JSON.stringify(o.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        {o.patronage}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
          {/**/}
          <div className="flex flex-col gap-2">
            <div className="align-start">
              <h1 className="font-bold">User management</h1>
              <p className="text-sm text-gray-700">
                Client references through organizations
              </p>
            </div>

            <div className={`w-full grid grid-cols-2 gap-2`}>
              <Card>
                {clients.map((c) => (
                  <div
                    key={c.id}
                    className="w-full p-2 flex flex-col gap-2 items-start justify-between"
                  >
                    <p className="text-medium">
                      {c.firstname} {c.lastname}
                    </p>{" "}
                    <p className="text-light text-sm">{c.email}</p>
                  </div>
                ))}
              </Card>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
