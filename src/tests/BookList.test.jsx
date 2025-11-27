import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("testing BookList component", () => {
  it("checks if card number is equal to json source", () => {
    render(<BookList books={fantasy} />);
    const cards = screen.getAllByTestId("cards");
    expect(cards).toHaveLength(fantasy.length);
  });
});
