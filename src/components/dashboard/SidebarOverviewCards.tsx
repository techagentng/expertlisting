import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function SidebarOverviewCards() {
  return (
    <div className="col-span-12 lg:col-span-4 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600"
              aria-hidden="true"
            >
              <path
                d="M3 10.5L12 3l9 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 9.5V21h14V9.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21v-7a3 3 0 0 1 6 0v7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <CardTitle className="text-lg">Listings Overview</CardTitle>
          </div>
          <Button variant="link" className="h-auto gap-1 px-0 text-blue-600">
            View all
            <ChevronRight className="size-4" />
          </Button>
        </CardHeader>
        <div className="h-px w-full bg-border" />
        <CardContent className="grid grid-cols-3 divide-x px-0 py-0">
          <div className="space-y-1.5 px-6 py-4">
            <p className="text-sm font-medium text-muted-foreground">Total</p>
            <p className="text-3xl font-semibold tracking-tight">1.8k</p>
          </div>
          <div className="space-y-1.5 px-6 py-4">
            <p className="text-sm font-medium text-muted-foreground">Active</p>
            <p className="text-3xl font-semibold tracking-tight">80</p>
          </div>
          <div className="space-y-1.5 px-6 py-4">
            <p className="text-sm font-medium text-muted-foreground">Archived</p>
            <p className="text-3xl font-semibold tracking-tight">1k</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600"
              aria-hidden="true"
            >
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <CardTitle className="text-lg">Users Overview</CardTitle>
          </div>
          <Button variant="link" className="h-auto gap-1 px-0 text-blue-600">
            View all
            <ChevronRight className="size-4" />
          </Button>
        </CardHeader>
        <div className="h-px w-full bg-border" />
        <CardContent className="grid grid-cols-3 divide-x px-0 py-0">
          <div className="space-y-1.5 px-6 py-4">
            <p className="text-sm font-medium text-muted-foreground">Total</p>
            <p className="text-3xl font-semibold tracking-tight">20.7k</p>
          </div>
          <div className="space-y-1.5 px-6 py-4">
            <p className="text-sm font-medium text-muted-foreground">Riders</p>
            <p className="text-3xl font-semibold tracking-tight">8.5k</p>
          </div>
          <div className="space-y-1.5 px-6 py-4">
            <p className="text-sm font-medium text-muted-foreground">Subscribers</p>
            <p className="text-3xl font-semibold tracking-tight">7.5k</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
