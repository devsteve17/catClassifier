import React from "react";
import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading component", () => {
  it("Displays the expected loading message", () => {
    render(<Loading />);
    const message = screen.getByText(/processing your image, please wait.../i);
    expect(message).toBeInTheDocument();
  });
});
