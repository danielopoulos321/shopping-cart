/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "../src/App";

describe("App component", () => {
  it("render navbar and home on first load", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
