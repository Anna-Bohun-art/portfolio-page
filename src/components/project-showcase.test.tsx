import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectShowcase } from "./project-showcase";

describe("ProjectShowcase", () => {
  it("switches a project between UI and architecture previews", async () => {
    const user = userEvent.setup();
    render(<ProjectShowcase />);

    expect(screen.getAllByLabelText("Illustrative user interface preview")).toHaveLength(3);
    const architectureButtons = screen.getAllByRole("button", { name: "Architecture" });
    await user.click(architectureButtons[0]);

    expect(screen.getByLabelText("Illustrative architecture diagram")).toBeInTheDocument();
    expect(architectureButtons[0]).toHaveAttribute("aria-pressed", "true");
  });
});
