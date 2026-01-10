import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-muted/20">
        <header className="w-full bg-[#0f5c49]">
          <nav className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
              <span className="text-xl font-semibold tracking-wide text-white">Expert Listing</span>
            </div>

            <div className="flex items-center gap-5">
              <img src="/icons/icon1.png" alt="icon" className="h-6 w-6" />
              <img src="/icons/icon2.png" alt="icon" className="h-6 w-6" />
              <img src="/icons/icon3.png" alt="icon" className="h-6 w-6" />
              <img src="/icons/icon4.png" alt="icon" className="h-6 w-6" />
              <img src="/icons/icon5.png" alt="icon" className="h-6 w-6" />
              <img src="/icons/icon6.png" alt="icon" className="h-6 w-6 rounded-full" />
            </div>
          </nav>
        </header>
        <div className="border-b bg-white">
          <div className="flex items-center gap-10 px-6 py-4">
            <Button variant="secondary" className="rounded-xl">
              Dashboard
            </Button>
            <Button variant="ghost">Listings</Button>
            <Button variant="ghost">Users</Button>
            <Button variant="ghost">Request</Button>
            <Button variant="ghost">Applications</Button>
            <Button variant="ghost">Tasks</Button>
          </div>
        </div>

        <div className="space-y-6 px-6 py-6">
          <h1 className="text-2xl font-semibold">Welcome, Ahmed</h1>

          <div className="grid grid-cols-12 gap-6">
            <Card className="col-span-12 lg:col-span-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Sales Overview</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Showing overview Jan 2022 - Sep 2022
                  </p>
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

                <div className="h-64 rounded-xl bg-muted/40" />

                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="space-y-1 p-4">
                      <p className="font-semibold text-blue-600">₦120,000,000.00</p>
                      <p className="text-sm">Total Inflow</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-1 p-4">
                      <p className="font-semibold text-green-600">₦50,000,000.00</p>
                      <p className="text-sm">MRR</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-1 p-4">
                      <p className="font-semibold text-teal-600">₦200,000,000.00</p>
                      <p className="text-sm">Commission Revenue</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-1 p-4">
                      <p className="font-semibold text-red-600">₦100,000,000.00</p>
                      <p className="text-sm">GMV</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
