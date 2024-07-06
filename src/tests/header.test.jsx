import { render, screen } from "@testing-library/react";
import Header from "../components/header";
import { beforeEach, expect } from "vitest";

describe("Test 1", () => {
  beforeEach(() => {
    render(<Header></Header>);
  });
  it("Displays heading elements", () => {
    const title = screen.getAllByRole("heading")[0];
    const leaderboard = screen.getAllByRole("heading")[1];

    expect(title).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
  });

  it("Displays correct text", async () => {
    const title = screen.getAllByRole("heading")[0].textContent;
    const leaderboard = screen.getAllByRole("heading")[1].textContent;

    expect(title).toMatch("Where is waldo");
    expect(leaderboard).toMatch("Leaderboard");
  });
});
