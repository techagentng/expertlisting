import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CustomCalendarProps = {
  month: Date;
  onMonthChange: (month: Date) => void;
  selected?: Date;
  onSelect?: (date: Date) => void;
};

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, delta: number) {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

function isSameDay(a?: Date, b?: Date) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function CustomCalendar({
  month,
  onMonthChange,
  selected,
  onSelect,
}: CustomCalendarProps) {
  const monthStart = startOfMonth(month);
  const monthIndex = monthStart.getMonth();
  const year = monthStart.getFullYear();

  const startWeekday = monthStart.getDay(); // 0 (Sun) - 6 (Sat)
  const gridStart = new Date(year, monthIndex, 1 - startWeekday);

  const days: Date[] = [];
  for (let i = 0; i < 42; i += 1) {
    days.push(new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i));
  }

  const today = new Date();

  return (
    <div className="flex h-full flex-col">
      <div className="relative flex items-center justify-center py-4">
        <div className="text-2xl font-bold tracking-tight text-white">
          {monthStart.toLocaleString("default", { month: "long" })} {year}
        </div>

        <div className="absolute left-1 top-1/2 flex -translate-y-1/2 items-center gap-2">
          <button
            type="button"
            onClick={() => onMonthChange(addMonths(monthStart, -1))}
            aria-label="Previous month"
            className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 active:bg-white/20"
          >
            <ChevronLeft size={22} strokeWidth={2.6} />
          </button>
        </div>

        <div className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-2">
          <button
            type="button"
            onClick={() => onMonthChange(addMonths(monthStart, 1))}
            aria-label="Next month"
            className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 active:bg-white/20"
          >
            <ChevronRight size={22} strokeWidth={2.6} />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/10">
        <div className="flex border-b border-white/10">
          {WEEKDAYS.map((d, i) => (
            <div
              key={d}
              className={cn(
                "flex-1 py-4 text-center text-sm font-medium uppercase tracking-wider text-white/60",
                i !== 6 && "border-r border-white/10"
              )}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          {Array.from({ length: 6 }).map((_, weekIndex) => (
            <div key={weekIndex} className="flex w-full flex-1">
              {days.slice(weekIndex * 7, weekIndex * 7 + 7).map((date, dayIndex) => {
                const outside = date.getMonth() !== monthIndex;
                const isToday = isSameDay(date, today);
                const isSelected = isSameDay(date, selected);

                return (
                  <div
                    key={date.toISOString()}
                    className={cn(
                      "relative flex flex-1",
                      dayIndex !== 6 && "border-r border-white/10",
                      weekIndex !== 5 && "border-b border-white/10"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => onSelect?.(date)}
                      className={cn(
                        "flex h-full w-full items-center justify-center rounded-none px-2 text-xl font-bold transition-all md:text-2xl",
                        "hover:bg-white/10 active:scale-95 active:bg-white/20",
                        outside && "text-white/40",
                        !outside && "text-white",
                        isToday && "bg-white/20 ring-2 ring-white/40",
                        isSelected &&
                          "scale-105 bg-gradient-to-br from-blue-600 to-indigo-600 font-extrabold text-white shadow-2xl shadow-blue-700/50"
                      )}
                      aria-label={date.toDateString()}
                    >
                      {date.getDate()}
                    </button>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
