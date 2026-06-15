import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("shows Anna's portrait and separates experience from education", () => {
    render(<Home />);

    expect(screen.getByAltText("Anna Kladova Bohun")).toBeInTheDocument();
    expect(screen.getByText(profileHeadline)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
  });

  it("offers the CV for viewing and download", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "View CV" })).toHaveAttribute(
      "href",
      "/Anna_Kladova_Bohun_CV_2026.pdf",
    );
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute("download");
  });
});

const profileHeadline =
  "Software Developer (React / TypeScript) | PhD Biochemistry | Life Science & Laboratory Systems";
