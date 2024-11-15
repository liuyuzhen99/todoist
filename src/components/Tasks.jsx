/* eslint-disable no-unused-vars */
import React from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";

export const Tasks = () => {
  const projectName = "";

  const { tasks } = useTasks("1");

  console.log(tasks);

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="task__list">
        {tasks.map((task) => {
          return (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} />
              <span>{task.task}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
