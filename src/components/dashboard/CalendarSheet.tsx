"use client";

import { useEffect, useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomCalendar from "@/components/dashboard/CustomCalendar";

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
  const [month, setMonth] = useState<Date>(() => defaultMonth ?? selected ?? new Date());

  useEffect(() => {
    if (defaultMonth) setMonth(defaultMonth);
  }, [defaultMonth]);

  useEffect(() => {
    if (selected) {
      setMonth(new Date(selected.getFullYear(), selected.getMonth(), 1));
    }
  }, [selected]);

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

        {/* Calendar container */}
        <div className="flex min-h-0 flex-1 flex-col px-4 py-6">
          <CustomCalendar
            month={month}
            onMonthChange={setMonth}
            selected={selected}
            onSelect={(date) => onSelect?.(date)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}