"use client";

import { useAdmin } from "../provider/adminProvider";
import { Dashboard } from "../_parts/Dashboard";
import { CompaniesDisplay } from "../_parts/CompaniesDisplay";
import { UsersDisplay } from "../_parts/UsersDisplay";
import { SubscriptionsDisplay } from "../_parts/SubscriptionsDisplay";

export default function MainPage() {
  const { activeSection } = useAdmin();

  switch (activeSection) {
    case "dashboard":
      return <Dashboard />;
    case "companies":
      return <CompaniesDisplay />;
    case "users":
      return <UsersDisplay />;
    case "subscriptions":
      return <SubscriptionsDisplay />;
    default:
      return <Dashboard />;
  }
}
