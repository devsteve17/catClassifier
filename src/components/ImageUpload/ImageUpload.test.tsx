import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageUpload } from "./ImageUpload";

const spyHandleSubmit = jest.fn();

describe("ImageUpload component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <ImageUpload handleSubmit={spyHandleSubmit} setFile={jest.fn()} validation={jest.fn()} />
    );
  });

  it("Displays the expected form title", () => {
    const title = screen.getByText(/image upload/i);
    expect(title).toBeInTheDocument();
  });
  it("Displays the expected label text", () => {
    const label = screen.getByText(/please choose an image to upload/i);
    expect(label).toBeInTheDocument();
  });
  it("Displays the submit button", () => {
    const button = screen.getByRole("button", { name: /upload/i });
    expect(button).toBeInTheDocument();
  });
  it("Calls the handleSubmit() if the submit button is clicked", () => {
    const button = screen.getByRole("button", { name: /upload/i });
    userEvent.click(button);
    expect(spyHandleSubmit).toHaveBeenCalledTimes(1);
  });
});
