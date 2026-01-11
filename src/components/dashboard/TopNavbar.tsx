import { Card } from "@/components/ui/card";

type TopNavbarProps = {
  onOpenBudget: () => void;
  onOpenCalendar: () => void;
};

export default function TopNavbar({ onOpenBudget, onOpenCalendar }: TopNavbarProps) {
  return (
    <Card className="w-full rounded-none border-0 shadow-none bg-[#0f5c49]">
      <nav className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <img src="/Group.png" alt="Logo" className="h-6 w-6 object-contain" />
          <span className="truncate text-lg font-semibold tracking-wide text-white sm:text-xl">
            Expert Listing
          </span>
        </div>
        <div className="flex max-w-[60%] items-center gap-3 overflow-x-auto whitespace-nowrap sm:max-w-none sm:gap-5">
          <button
            type="button"
            className="rounded-md"
            onClick={onOpenBudget}
            aria-label="Open budgeting"
          >
            <img src="/Budgeting.png" alt="Budgeting" className="h-6 w-6 cursor-pointer" />
          </button>
          <button type="button" onClick={onOpenCalendar} aria-label="Open calendar">
            <img src="/Calendar.png" alt="icon" className="h-6 w-6 cursor-pointer" />
          </button>
          <img src="/document-text.png" alt="icon" className="h-6 w-6 cursor-pointer" />
          <img src="/Payout Center.png" alt="icon" className="h-6 w-6 cursor-pointer" />
          <img src="/Marketplace.png" alt="icon" className="h-6 w-6 cursor-pointer" />
          <img src="/Profile.png" alt="icon" className="h-6 w-6 cursor-pointer rounded-full" />
        </div>
      </nav>
    </Card>
  );
}
