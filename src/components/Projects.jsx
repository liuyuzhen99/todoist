/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";

export const Projects = ({ activeValue = null }) => {
  const { active, setActive } = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => {
      return (
        <li
          key={project.proectId}
          data-doc-id={project.docId}
          data-testid="project-action"
          className={
            active === project.projectId
              ? "active sidebar__project"
              : "sidebar__project"
          }
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.proectId);
          }}
        >
          I am a project
        </li>
      );
    })
  );
};
