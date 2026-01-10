import { Button } from "@/components/ui/button";

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

        <div className="px-6 py-10">
          <Button>Get started</Button>
        </div>
      </div>
    </main>
  );
}
