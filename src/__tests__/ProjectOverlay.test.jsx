/* eslint-disable no-unused-vars */
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ProjectOverlay } from "../components/ProjectOverlay";
import { useProjectsValue } from "../context";
import { vi, beforeEach, describe, it, expect, afterEach } from "vitest";

beforeEach(cleanup);

vi.mock("../context", () => ({
  useProjectsValue: vi.fn(() => ({
    projects: [
      {
        name: "🤲 THE OFFICE",
        projectId: "1",
        userId: "rGMCGCjvoe0rGvGu3h5R",
        docId: "michael-scott",
      },
    ],
  })),
}));

describe("<ProjectOverlay", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("Success", () => {
    it("renders the project overlay", () => {
      const showProjectOverlay = true;
      const setProject = vi.fn();
      const setShowProjectOverlay = vi.fn(() => !showProjectOverlay);

      const { queryByTestId } = render(
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      );
      expect(queryByTestId("project-overlay")).toBeTruthy();
      fireEvent.click(queryByTestId("project-overlay-action"));
      expect(setProject).toHaveBeenCalled();
    });

    it("renders the project overlay use KeyDown", () => {
      const showProjectOverlay = true;
      const setProject = vi.fn();
      const setShowProjectOverlay = vi.fn(() => !showProjectOverlay);

      const { queryByTestId } = render(
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      );
      expect(queryByTestId("project-overlay")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("project-overlay-action"));
      expect(setProject).toHaveBeenCalled();
    });
  });

  describe("Failure", () => {
    it("does not render the project overlay with any projects", () => {
      useProjectsValue.mockImplementation(() => ({
        projects: [],
      }));

      const { queryByTestId } = render(<ProjectOverlay showProjectOverlay />);
      expect(queryByTestId("project-overlay")).toBeTruthy();
      expect(queryByTestId("project-overlay-action")).toBeFalsy();
    });
  });
});
