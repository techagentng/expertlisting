import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EstateDashboard from "@/components/EstateDashboard";

describe("Dashboard modals", () => {
  it("opens and closes the budget modal", async () => {
    const user = userEvent.setup();
    render(<EstateDashboard />);

    expect(
      screen.queryByText(/Set up annual budgets by account category/i)
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /open budgeting/i }));

    expect(
      await screen.findByText(/Set up annual budgets by account category/i)
    ).toBeInTheDocument();

    // Dialog close button (shadcn/radix)
    await user.click(screen.getByRole("button", { name: /close/i }));

    expect(
      screen.queryByText(/Set up annual budgets by account category/i)
    ).not.toBeInTheDocument();
  });

  it("opens and closes the calendar sheet", async () => {
    const user = userEvent.setup();
    render(<EstateDashboard />);

    expect(screen.queryByText(/Calendar/i)).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /open calendar/i }));

    expect(await screen.findByText(/^Calendar$/i)).toBeInTheDocument();

    const dialogs = screen.getAllByRole("dialog");
    const calendarDialog = dialogs.find((d) =>
      within(d).queryByText(/^Calendar$/i)
    );
    expect(calendarDialog).toBeTruthy();

    const closeButtons = within(calendarDialog as HTMLElement).getAllByRole("button", { name: /close/i });
    await user.click(closeButtons[0]);

    expect(screen.queryByText(/^Calendar$/i)).not.toBeInTheDocument();
  });
});
