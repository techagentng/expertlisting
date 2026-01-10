import { Card } from "@/components/ui/card";

type TopNavbarProps = {
  onOpenBudget: () => void;
};

export default function TopNavbar({ onOpenBudget }: TopNavbarProps) {
  return (
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
            onClick={onOpenBudget}
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
  );
}
