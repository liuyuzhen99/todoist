/* eslint-disable no-unused-vars */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { it, beforeEach, describe, expect } from "vitest";
import { App } from "../App";

beforeEach(cleanup);

describe("<App />", () => {
  it("renders the application", () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("application")).toBeTruthy();
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeFalsy();
  });

  it("renders the application using dark mode", () => {
    const { queryByTestId } = render(<App darkModeDefault />);
    expect(queryByTestId("application")).toBeTruthy();
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeTruthy();
  });
});
