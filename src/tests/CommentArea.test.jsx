import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("testing CommentArea component", () => {
  it("checks the render of CommentArea section", () => {
    render(<CommentArea />);
    const commentArea = screen.getByTestId("comment-area");
    expect(commentArea).toBeInTheDocument();
  });
});
