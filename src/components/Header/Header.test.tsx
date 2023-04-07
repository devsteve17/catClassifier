import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("Displays the expected app title", () => {
    render(<Header />);
    const title = screen.getByText(/cat classifier/i);
    expect(title).toBeInTheDocument();
  });
});
