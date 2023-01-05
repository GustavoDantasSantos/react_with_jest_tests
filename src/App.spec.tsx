import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  it("Should be render correctly", () => {
    render(<App />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
