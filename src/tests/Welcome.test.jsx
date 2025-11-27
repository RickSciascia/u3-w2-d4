import Welcome from "../components/Welcome";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("testing mounting of Welcome component", () => {
  it("checks if title is mounted correctly", () => {
    render(<Welcome />);
    const title = screen.getByText("Benvenuti in EpiBooks!");
    expect(title).toBeInTheDocument();
  });
});
