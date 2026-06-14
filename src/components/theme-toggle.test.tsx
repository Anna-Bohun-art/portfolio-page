import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./theme-toggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  it("toggles and persists the selected theme", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", { name: "Switch to dark mode" });

    await user.click(button);

    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("anna-theme")).toBe("dark");
    await waitFor(() => expect(button).toHaveAccessibleName("Switch to light mode"));
  });
});
