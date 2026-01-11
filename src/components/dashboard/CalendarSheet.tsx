import { Calendar } from "@/components/ui/calendar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";

type CalendarSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMonth?: Date;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
};

export default function CalendarSheet({
  open,
  onOpenChange,
  defaultMonth,
  selected,
  onSelect,
}: CalendarSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className={cn(
          "h-full w-[92vw] max-w-[420px] sm:max-w-[460px]",
          "gap-0 border-l border-white/8 bg-gradient-to-b from-zinc-950 to-black p-0",
          "text-white backdrop-blur-xl"
        )}
      >
        {/* Header */}
        <SheetHeader className="relative shrink-0 border-b border-white/7 bg-black/40 px-5 py-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SheetClose asChild>
                <button
                  className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 active:bg-white/15"
                  aria-label="Go back"
                >
                  <ChevronLeft size={24} strokeWidth={2.2} />
                </button>
              </SheetClose>

              <SheetTitle className="text-2xl font-semibold text-white">
                Calendar
              </SheetTitle>
            </div>

            <SheetClose asChild>
              <button
                className="rounded-full p-2.5 text-white/70 transition-colors hover:bg-white/10 active:bg-white/15"
                aria-label="Close"
              >
                <X size={22} strokeWidth={2.4} />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Calendar container - fills remaining space */}
        <div className="flex min-h-0 flex-1 flex-col px-4 py-5">
          <Calendar
            mode="single"
            defaultMonth={defaultMonth}
            selected={selected}
            onSelect={onSelect}
            className="h-full w-full bg-transparent p-0"
            classNames={{
              root: "h-full",
              months: "h-full flex flex-col",
              month: "h-full flex flex-col",
              caption: "relative py-3 flex justify-center items-center",
              caption_label: "text-2xl font-bold text-white tracking-tight",
              nav: "absolute right-1 top-3 flex gap-1",
              nav_button: cn(
                "h-9 w-9 rounded-full bg-transparent p-0 text-white/80 hover:bg-white/15 transition-colors"
              ),
              table: "h-full w-full",
              head_row: "flex",
              head_cell:
                "flex-1 text-center text-sm font-medium text-white/60 uppercase tracking-wider py-3",
              tbody: "flex h-full flex-col gap-5",
              row: "flex w-full flex-1 gap-2",
              cell: cn(
                "relative flex-1 p-0 text-center",
                "focus-within:relative focus-within:z-20"
              ),
              day: cn(
                "mx-auto h-full w-full border-0 rounded-xl font-medium text-white/90 text-lg",
                "transition-all hover:bg-white/10 active:bg-white/20",
                "flex items-center justify-center"
              ),
              day_today: "bg-white/15 font-bold ring-1 ring-white/30",
              day_selected:
                "bg-gradient-to-br from-blue-600 to-indigo-600 font-bold shadow-lg shadow-blue-600/40 text-white",
              day_disabled: "text-white/30 cursor-not-allowed opacity-50",
              day_hidden: "invisible",
              day_outside: "text-white/35 opacity-70",
            }}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}