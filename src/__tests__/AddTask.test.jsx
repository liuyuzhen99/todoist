/* eslint-disable no-unused-vars */
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { AddTask } from "../components/AddTask";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { firebase } from "../firebase";
import { it, afterEach, beforeEach, describe, expect, vi } from "vitest";
import { use } from "react";

beforeEach(cleanup);

vi.mock("../context", () => ({
  useSelectedProjectValue: vi.fn(() => ({ selectedProject: "1" })),
  useProjectsValue: vi.fn(() => ({ projects: [] })),
}));

vi.mock("../firebase", () => ({
  firebase: {
    firestore: vi.fn(() => ({
      collection: vi.fn(() => ({
        add: vi.fn(() => Promise.resolve("Never mock firebase")),
      })),
    })),
  },
}));

describe("<AddTask />", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("Success", () => {
    it("renders the <AddTask />", () => {
      const { queryByTestId } = render(<AddTask />);
      expect(queryByTestId("add-task-comp")).toBeTruthy();
    });

    it("renders the <AddTask /> quick overlay", () => {
      const setShowQuickAddTask = vi.fn();

      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain={false}
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      expect(queryByTestId("quick-add-task")).toBeTruthy();
    });

    it("renders the <AddTask /> main showable when clicked", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();
    });

    it("renders the <AddTask /> main showable when keyDown", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.keyDown(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();
    });

    it("renders the <AddTask /> project overlay when clicked", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.click(queryByTestId("show-project-overlay"));
      expect(queryByTestId("project-overlay")).toBeTruthy();
    });

    it("renders the <AddTask /> project overlay when keydown", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.keyDown(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("show-project-overlay"));
      expect(queryByTestId("project-overlay")).toBeTruthy();
    });

    it("render the <AddTask /> task date overlay when clicked", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.click(queryByTestId("show-task-date-overlay"));
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
    });

    it("render the <AddTask /> task date overlay when keydown", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.keyDown(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("show-task-date-overlay"));
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
    });

    it("render the <AddTask /> main when cancel is clicked", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.click(queryByTestId("add-task-main-cancel"));
      expect(queryByTestId("add-task-main")).toBeFalsy();
    });

    it("render the <AddTask /> main when cancel is keydown", () => {
      const { queryByTestId } = render(<AddTask showAddTaskMain />);
      fireEvent.keyDown(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("add-task-main-cancel"));
      expect(queryByTestId("add-task-main")).toBeFalsy();
    });

    it("render the <AddTask /> for quick add task and then clicks cancel", () => {
      const showQuickAddTask = true;
      const setShowQuickAddTask = vi.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask setShowQuickAddTask={setShowQuickAddTask} showQuickAddTask />
      );
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();
      fireEvent.click(queryByTestId("add-task-quick-cancel"));
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("render the <AddTask /> for quick add task and then clicks cancel using Keydown", () => {
      const showQuickAddTask = true;
      const setShowQuickAddTask = vi.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask setShowQuickAddTask={setShowQuickAddTask} showQuickAddTask />
      );
      fireEvent.keyDown(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-main")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("add-task-quick-cancel"));
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> and adds a task to the inbox", () => {
      useSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = vi.fn(() => !showQuickAddTask);

      const { queryByTestId } = render(
        <AddTask showQuickAddTask setShowQuickAddTask={setShowQuickAddTask} />
      );
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-content")).toBeTruthy();
      fireEvent.change(queryByTestId("add-task-content"), {
        target: { value: "I am a new task and I am amazing!" },
      });
      expect(queryByTestId("add-task-content").value).toBe(
        "I am a new task and I am amazing!"
      );
      fireEvent.click(queryByTestId("add-task"));
      expect(queryByTestId("add-task-main")).toBeTruthy();
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> and adds a task to the today", () => {
      useSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "TODAY",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = vi.fn(() => !showQuickAddTask);

      const { queryByTestId } = render(
        <AddTask showQuickAddTask setShowQuickAddTask={setShowQuickAddTask} />
      );
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-content")).toBeTruthy();
      fireEvent.change(queryByTestId("add-task-content"), {
        target: { value: "I am a new task and I am amazing!" },
      });
      expect(queryByTestId("add-task-content").value).toBe(
        "I am a new task and I am amazing!"
      );
      fireEvent.click(queryByTestId("add-task"));
      expect(queryByTestId("add-task-main")).toBeTruthy();
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> and adds a task to the next_7", () => {
      useSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "NEXT_7",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = vi.fn(() => !showQuickAddTask);

      const { queryByTestId } = render(
        <AddTask showQuickAddTask setShowQuickAddTask={setShowQuickAddTask} />
      );
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-content")).toBeTruthy();
      fireEvent.change(queryByTestId("add-task-content"), {
        target: { value: "I am a new task and I am amazing!" },
      });
      expect(queryByTestId("add-task-content").value).toBe(
        "I am a new task and I am amazing!"
      );
      fireEvent.click(queryByTestId("add-task"));
      expect(queryByTestId("add-task-main")).toBeTruthy();
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> and adds a task with a task date", () => {
      useSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "1",
      }));

      const { queryByTestId } = render(<AddTask showMain />);
      fireEvent.click(queryByTestId("show-main-action"));
      expect(queryByTestId("add-task-content")).toBeTruthy();
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.change(queryByTestId("add-task-content"), {
        target: { value: "I am the most amazing task ever!" },
      });
      expect(queryByTestId("add-task-content").value).toBe(
        "I am the most amazing task ever!"
      );
      fireEvent.click(queryByTestId("show-task-date-overlay"));
      expect(queryByTestId("task-date-overlay")).toBeTruthy();

      fireEvent.click(queryByTestId("test-date-tomorrow"));
      expect(queryByTestId("task-date-overlay")).toBeFalsy();

      fireEvent.click(queryByTestId("add-task"));
    });
  });
});
