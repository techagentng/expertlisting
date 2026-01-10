"use client";

import { useState } from "react";

import BudgetSetupHero from "@/components/BudgetSetupHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const maxY = 50;
  const chartHeight = 220;
  const chartWidth = 520;
  const leftPad = 44;
  const rightPad = 16;
  const topPad = 14;
  const bottomPad = 28;

  const plotWidth = chartWidth - leftPad - rightPad;
  const plotHeight = chartHeight - topPad - bottomPad;
  const groupWidth = plotWidth / salesData.length;
  const barWidth = Math.min(10, groupWidth / 4);
  const gap = 6;
  const scaleY = (v: number) => (v / maxY) * plotHeight;

  return (
    <div className="min-h-screen bg-muted/20">
      <Dialog open={isBudgetModalOpen} onOpenChange={setIsBudgetModalOpen}>
        <DialogContent className="!w-[92vw] !max-w-[410px] overflow-hidden p-0 shadow-2xl sm:!w-[410px] sm:!max-w-[410px] sm:rounded-3xl">
          <BudgetSetupHero />
        </DialogContent>
      </Dialog>

      <Card className="w-full rounded-none border-0 shadow-none bg-[#0f5c49]">
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/Group.png" alt="Logo" className="h-6 w-6 object-contain" />
            <span className="text-white text-xl font-semibold tracking-wide">Expert Listing</span>
          </div>
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="rounded-md"
              onClick={() => setIsBudgetModalOpen(true)}
              aria-label="Open budgeting"
            >
              <img src="/Budgeting.png" alt="Budgeting" className="h-6 w-6 cursor-pointer" />
            </button>
            <img src="/Calendar.png" alt="icon" className="h-6 w-6 cursor-pointer" />
            <img src="/document-text.png" alt="icon" className="h-6 w-6 cursor-pointer" />
            <img src="/Payout Center.png" alt="icon" className="h-6 w-6 cursor-pointer" />
            <img src="/Marketplace.png" alt="icon" className="h-6 w-6 cursor-pointer" />
            <img src="/Profile.png" alt="icon" className="h-6 w-6 cursor-pointer rounded-full" />
          </div>
        </nav>
      </Card>

      <div className="bg-white border-b">
        <div className="flex items-center gap-10 px-6 py-4">
          <Button
            variant="ghost"
            className="gap-2 rounded-xl bg-[#dceae6] text-[#0f5c49] hover:bg-[#dceae6]/80 hover:text-[#0f5c49]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0f5c49]"
              aria-hidden="true"
            >
              <path
                d="M3 10.5 12 3l9 7.5"
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
            Dashboard
          </Button>
          <Button variant="ghost" className="gap-2 rounded-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Listings
          </Button>
          <Button variant="ghost" className="gap-2 rounded-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
            Users
          </Button>
          <Button variant="ghost" className="gap-2 rounded-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Request
          </Button>
          <Button variant="ghost" className="gap-2 rounded-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M8 7V3h8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path
                d="M6 7h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            Applications
          </Button>
          <Button variant="ghost" className="gap-2 rounded-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 11l3 3L22 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tasks
          </Button>
        </div>
      </div>

      <div className="mx-6 my-6 space-y-6 rounded-2xl bg-background p-6">
        <h1 className="text-2xl font-semibold">Welcome, Ahmed</h1>

        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-12 lg:col-span-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Sales Overview</CardTitle>
                <p className="text-sm text-muted-foreground">Showing overview Jan 2022 - Sep 2022</p>
              </div>
              <Button variant="outline" className="rounded-full">View Transactions</Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="year" className="w-fit ml-auto">
                <TabsList>
                  <TabsTrigger value="week">1 Week</TabsTrigger>
                  <TabsTrigger value="month">1 Month</TabsTrigger>
                  <TabsTrigger value="year">1 Year</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="grid gap-6 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    <button
                      type="button"
                      className="grid size-9 place-items-center rounded-full border bg-background text-muted-foreground shadow-sm"
                      aria-label="Previous"
                    >
                      ‹
                    </button>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <button
                      type="button"
                      className="grid size-9 place-items-center rounded-full border bg-background text-muted-foreground shadow-sm"
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </div>

                  <div className="overflow-hidden rounded-xl border bg-background px-3 py-3">
                    <svg
                      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                      className="h-64 w-full"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g transform={`translate(${leftPad},${topPad})`}>
                        {[0, 10, 20, 30, 40, 50].map((tick) => {
                          const y = plotHeight - scaleY(tick);
                          return (
                            <g key={tick}>
                              <line
                                x1={0}
                                x2={plotWidth}
                                y1={y}
                                y2={y}
                                stroke="#e5e7eb"
                                strokeWidth={1}
                              />
                              <text
                                x={-10}
                                y={y + 4}
                                textAnchor="end"
                                fontSize={11}
                                fill="#9ca3af"
                              >
                                {tick === 0 ? "0" : `${tick}m`}
                              </text>
                            </g>
                          );
                        })}

                        {salesData.map((d, i) => {
                          const x0 = i * groupWidth + groupWidth / 2;
                          const bx = x0 - barWidth - gap;
                          const gx = x0;
                          const rx = x0 + barWidth + gap;
                          const bH = scaleY(d.blue);
                          const gH = scaleY(d.green);
                          const rH = scaleY(d.red);
                          const baseY = plotHeight;

                          return (
                            <g key={d.month}>
                              <rect
                                x={bx - barWidth / 2}
                                y={baseY - bH}
                                width={barWidth}
                                height={bH}
                                rx={3}
                                fill="#3b82f6"
                              />
                              <rect
                                x={gx - barWidth / 2}
                                y={baseY - gH}
                                width={barWidth}
                                height={gH}
                                rx={3}
                                fill="#22c55e"
                              />
                              <rect
                                x={rx - barWidth / 2}
                                y={baseY - rH}
                                width={barWidth}
                                height={rH}
                                rx={3}
                                fill="#ef4444"
                              />
                              <text
                                x={x0}
                                y={plotHeight + 22}
                                textAnchor="middle"
                                fontSize={12}
                                fill="#6b7280"
                              >
                                {d.month}
                              </text>
                            </g>
                          );
                        })}
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="space-y-1.5 p-4">
                      <p className="truncate text-lg font-semibold text-blue-600">₦120,000,000.00</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-xs text-muted-foreground">Total Inflow</p>
                        <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-green-600">
                          <span className="grid size-4 place-items-center rounded-full bg-green-100">↑</span>
                          <span>2.5%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-1.5 p-4">
                      <p className="truncate text-lg font-semibold text-green-600">₦50,000,000.00</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-xs text-muted-foreground">MRR</p>
                        <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-green-600">
                          <span className="grid size-4 place-items-center rounded-full bg-green-100">↑</span>
                          <span>2.5%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-1.5 p-4">
                      <p className="truncate text-lg font-semibold text-teal-600">₦200,000,000.00</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-xs text-muted-foreground">Commission Revenue</p>
                        <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-green-600">
                          <span className="grid size-4 place-items-center rounded-full bg-green-100">↑</span>
                          <span>0.5%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-1.5 p-4">
                      <p className="truncate text-lg font-semibold text-red-600">₦100,000,000.00</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-xs text-muted-foreground">GMV</p>
                        <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-red-600">
                          <span className="grid size-4 place-items-center rounded-full bg-red-100">↓</span>
                          <span>0.5%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

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
                <Button variant="link" className="h-auto px-0 text-blue-600">
                  View all
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
                <Button variant="link" className="h-auto px-0 text-blue-600">
                  View all
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
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="relative overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <div className="relative h-72">
                <img src="/House1.jpg" alt="property" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-10 left-4 space-y-1 text-white">
                  <p className="text-xs uppercase tracking-wide">Most Clicked</p>
                  <p className="text-lg font-semibold">Urban Prime Plaza Premiere</p>
                </div>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <div className="relative h-72">
                <img src="/house2.png" alt="property" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-10 left-4 space-y-1 text-white">
                  <p className="text-xs uppercase tracking-wide">Most Watchlisted</p>
                  <p className="text-lg font-semibold">Urban Prime Plaza Premiere</p>
                </div>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <div className="relative h-72">
                <img src="/house3.png" alt="property" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-10 left-4 space-y-1 text-white">
                  <p className="text-xs uppercase tracking-wide">Hottest Listing</p>
                  <p className="text-lg font-semibold">Urban Prime Plaza Premiere</p>
                </div>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
