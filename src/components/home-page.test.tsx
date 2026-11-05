import { render, screen } from "@testing-library/react";
import { HomePage } from "./home-page";

describe("HomePage", () => {
  it("shows Anna's portrait and separates experience from education", () => {
    render(<HomePage locale="en" />);

    expect(screen.getByAltText("Anna Kladova Bohun")).toBeInTheDocument();
    expect(screen.getByText(profileHeadline)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
  });

  it("links each language version to the other", () => {
    const { unmount } = render(<HomePage locale="en" />);
    expect(screen.getByRole("link", { name: "Auf Deutsch wechseln" })).toHaveAttribute("href", "/de");
    unmount();

    render(<HomePage locale="de" />);
    expect(screen.getByRole("link", { name: "Switch to English" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("heading", { name: "Berufserfahrung" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Lebenslauf ansehen" })).toBeInTheDocument();
  });
});

const profileHeadline =
  "Software Developer (React / TypeScript) | PhD Biochemistry | Life Science & Laboratory Systems";
