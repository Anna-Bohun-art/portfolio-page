import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { content } from "@/data/content";
import { TechConstellation } from "./tech-constellation";

describe("TechConstellation", () => {
  it("reveals practical proof points by keyboard focus", async () => {
    const user = userEvent.setup();
    const { technologyGroups, scientificKnowledge, toolkit } = content.en;
    render(<TechConstellation groups={technologyGroups} knowledge={scientificKnowledge} labels={toolkit} />);

    await user.tab();
    expect(screen.getByRole("button", { name: "React" })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole("button", { name: "TypeScript" })).toHaveFocus();
    expect(screen.getByText("Typed feature development for maintainable frontends")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Biochemistry" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Organic Chemistry" })).toBeInTheDocument();
  });
});
