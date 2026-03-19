"use client";

import { useState, useEffect } from "react";
import Header from "../_parts/Header";
import { ControlSideBar } from "../_parts/ControlSideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserRoundCheck, Banknote, Building2 } from "lucide-react";
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
  return (
    <>
      <div
        className={`w-full h-full flex flex-col lg:p-5 lg:gap-5 items-center`}
      >
        <Header />
        {/*Leading three info decks*/}
        <div className={`w-full flex flex-col gap-2 p-5`}>
          <div className={`w-full grid grid-cols-3 gap-2`}>
            <Card className={`p-5`}>
              <p className="text-gray-500">НИЙТ КОМПАНИУД</p>
              <Building2 className="" />
              <p>{org.length}</p>
            </Card>
            <Card>
              <p className="text-gray-500">ИДЭВХИТЭЙ ХЭРЭГЛЭГЧИД</p>
              <UserRoundCheck />
              <p>{clients.length}</p>
            </Card>
            <Card>
              {" "}
              <p className="text-gray-500">САР БҮРИЙН ОРЛОГО</p>
              <Banknote />
              <p>{}</p>
            </Card>
          </div>
          {/*Top ranked org info deck*/}

          <div className="w-full flex flex-col justify-between gap-2">
            <div className="flex justify-between">
              <p className="font-bold">Компаниудын тойм</p>
              <Input placeholder="Search Company" className="w-fit"></Input>
            </div>

            <Card className={`w-full `}>
              {" "}
              <Table>
                <TableCaption>Most recent companies</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>desc</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">
                      Membership plan
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {org.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell className="font-medium">{o.name}</TableCell>
                      <TableCell>{o.description}</TableCell>
                      <TableCell>{JSON.stringify(o.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        {o.patronage}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
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
                  <div key={c.id}>
                    {c.firstname} {c.lastname}
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
