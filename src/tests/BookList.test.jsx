import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("testing BookList component", () => {
  it("checks if card number is equal to json source", () => {
    render(<BookList books={fantasy} />);
    const cards = screen.getAllByTestId("cards");
    expect(cards).toHaveLength(fantasy.length);
  });
  it("checks SearchBar", () => {
    render(<BookList books={fantasy} />);
    const searchBar = screen.getByRole("searchbox");
    expect(searchBar).toBeInTheDocument;
  });
  it("checks SearchBar functionality", () => {
    render(<BookList books={fantasy} />);
    const searchBar = screen.getByRole("searchbox");
    fireEvent.change(searchBar, { target: { value: "thro" } });
    const filteredCards = screen.getAllByTestId("cards");
    expect(filteredCards).not.toHaveLength(fantasy.length);
  });
});

describe("testing SingleBook component", () => {
  it("checks border card activation on click", () => {
    render(<BookList books={fantasy} />);
    const card = screen.getAllByTestId("cards-border");
    fireEvent.click(card[0]);
    //dovuto fare border con 3 proprietà separate perché fa i capricci
    expect(card[0]).toHaveStyle("border-width: 3px");
    expect(card[0]).toHaveStyle("border-style: solid");
    // controllo solo border-top perché come valore di ritorno lui mi da 4 volte rgb(255,0,0) tirando 4 bordi
    expect(card[0]).toHaveStyle("border-top-color: rgb(255, 0, 0)");
  });
  it("checks border card de-activation on click", () => {
    render(<BookList books={fantasy} />);
    const card = screen.getAllByTestId("cards-border");
    fireEvent.click(card[0]);
    //dovuto fare border con 3 proprietà separate perché fa i capricci
    expect(card[0]).toHaveStyle("border-width: 3px");
    expect(card[0]).toHaveStyle("border-style: solid");
    // controllo solo border-top perché come valore di ritorno lui mi da 4 volte rgb(255,0,0) tirando 4 bordi
    expect(card[0]).toHaveStyle("border-top-color: rgb(255, 0, 0)");
    fireEvent.click(card[1]);
    expect(card[0]).toHaveStyle("border-style: none");
    expect(card[1]).toHaveStyle("border-top-color: rgb(255, 0, 0)");
    expect(card[1]).toHaveStyle("border-style: solid");
  });
});
