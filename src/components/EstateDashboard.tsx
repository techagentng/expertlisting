"use client";

import { useState } from "react";

import BudgetSetupHero from "@/components/BudgetSetupHero";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import MenuBar from "@/components/dashboard/MenuBar";
import PropertyCards from "@/components/dashboard/PropertyCards";
import SalesOverview from "@/components/dashboard/SalesOverview";
import SidebarOverviewCards from "@/components/dashboard/SidebarOverviewCards";
import TopNavbar from "@/components/dashboard/TopNavbar";

export default function EstateDashboard() {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  const salesData = [
    { month: "Jan", blue: 35, green: 28, red: 10 },
    { month: "Feb", blue: 6, green: 28, red: 10 },
    { month: "Mar", blue: 15, green: 7, red: 4 },
    { month: "Apr", blue: 15, green: 25, red: 6 },
    { month: "May", blue: 10, green: 0, red: 7 },
    { month: "Jun", blue: 37, green: 50, red: 7 },
    { month: "Jul", blue: 24, green: 37, red: 18 },
    { month: "Aug", blue: 24, green: 7, red: 18 },
    { month: "Sep", blue: 36, green: 33, red: 6 },
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Dialog open={isBudgetModalOpen} onOpenChange={setIsBudgetModalOpen}>
        <DialogContent className="!w-[92vw] !max-w-[410px] overflow-hidden p-0 shadow-2xl sm:!w-[410px] sm:!max-w-[410px] sm:rounded-3xl">
          <BudgetSetupHero />
        </DialogContent>
      </Dialog>

      <TopNavbar onOpenBudget={() => setIsBudgetModalOpen(true)} />
      <MenuBar active="dashboard" />

      <div className="mx-4 my-4 space-y-6 rounded-2xl bg-background p-4 sm:mx-6 sm:my-6 sm:p-6">
        <h1 className="text-xl font-semibold sm:text-2xl">Welcome, Ahmed</h1>

        <div className="grid grid-cols-12 gap-6">
          <SalesOverview salesData={salesData} />
          <SidebarOverviewCards />
        </div>

        <PropertyCards />
      </div>
    </div>
  );
}
