import { Button } from "@/components/ui/button";
import { BarChart3, LineChart, SlidersHorizontal } from "lucide-react";

export default function BudgetSetupHero() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white">
      <div className="relative h-40">
        <img
          src="/media.png"
          alt="Budgeting header"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid size-18 place-items-center rounded-3xl border border-white/30 bg-white/5">
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="14"
                y="10"
                width="36"
                height="44"
                rx="14"
                stroke="white"
                strokeWidth="4"
              />
              <rect
                x="22"
                y="18"
                width="20"
                height="12"
                rx="6"
                stroke="white"
                strokeWidth="4"
              />
              <circle cx="26" cy="38" r="2.5" fill="white" />
              <circle cx="32" cy="38" r="2.5" fill="white" />
              <circle cx="38" cy="38" r="2.5" fill="white" />
              <circle cx="26" cy="44" r="2.5" fill="white" />
              <circle cx="32" cy="44" r="2.5" fill="white" />
              <circle cx="38" cy="44" r="2.5" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-5 py-5">
        <div className="mb-5 flex gap-3">
          <div className="pt-0.5 text-gray-600">
            <SlidersHorizontal className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold leading-tight text-gray-900">
              Set up annual budgets by account category
            </h2>
            <p className="mt-1.5 text-sm text-gray-600">
              Allocate funds across income and expense lines with full visibility.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex gap-3">
            <div className="pt-0.5 text-gray-600">
              <LineChart className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Track actuals vs budget in real time
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                See how your community is performing against plan, month by month.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="pt-0.5 text-gray-600">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Adjust figures and forecast with ease
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Edit amounts, apply percentage changes, or roll forward last year&apos;s
                data—all in one place.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button className="h-11 w-full rounded-full bg-[#111827] text-sm font-semibold text-white hover:bg-[#111827]/90">
            Create Budget
          </Button>
        </div>
      </div>
    </div>
  );
}
