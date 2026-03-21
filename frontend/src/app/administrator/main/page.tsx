"use client";

import { useState } from "react";
import { ControlSideBar } from "../_parts/ControlSideBar";
import { Lobby } from "../_parts/Lobby";
import { Companies } from "../_parts/Companies";
import { Clients } from "../_parts/Clients";
import { Sales } from "../_parts/Sales";
type DisplayTypes = "Lobby" | "Companies" | "Clients" | "Sales";

const RenderContent = ({ active }: { active: DisplayTypes }) => {
  switch (active) {
    case "Lobby":
      return <Lobby />;
    case "Clients":
      return <Clients />;
    case "Companies":
      return <Companies />;
    case "Sales":
      return <Sales />;
    default:
      return <Lobby />;
  }
};

export default function MainPage() {
  const [active, setActive] = useState<DisplayTypes>("Lobby");

  return (
    <>
      <ControlSideBar />
      <RenderContent active={active} />
    </>
  );
}
