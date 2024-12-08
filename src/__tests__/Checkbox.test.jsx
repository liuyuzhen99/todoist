/* eslint-disable no-unused-vars */
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from "../components/Checkbox";
import { describe, it, expect, vi, beforeEach } from "vitest";

beforeEach(cleanup);

vi.mock("../firebase", () => ({
  firebase: {
    firestore: vi.fn(() => ({
      collection: vi.fn(() => ({
        doc: vi.fn(() => ({
          update: vi.fn(),
        })),
      })),
    })),
  },
}));

describe("<Checkbox />", () => {
  describe("Success", () => {
    it("renders the task checkbox", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this tutorial series!" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
    });

    it("renders the task checkbox and accepts a onClick", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this tutorial series!" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.click(queryByTestId("checkbox-action"));
    });

    it("renders the task checkbox and accepts a onKeyDown", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this tutorial series!" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("checkbox-action"));
    });
  });
});
