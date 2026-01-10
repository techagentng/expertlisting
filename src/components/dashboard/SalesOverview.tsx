import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SalesDatum = {
  month: string;
  blue: number;
  green: number;
  red: number;
};

type SalesOverviewProps = {
  salesData: SalesDatum[];
};

export default function SalesOverview({ salesData }: SalesOverviewProps) {
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
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Sales Overview</CardTitle>
          <p className="text-sm text-muted-foreground">Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <Button variant="outline" className="rounded-full">
          View Transactions
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        <Tabs defaultValue="year" className="ml-auto w-fit">
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
  );
}
