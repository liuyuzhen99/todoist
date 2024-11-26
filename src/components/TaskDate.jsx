/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from "moment";
import React from "react";
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from "react-icons/fa";

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            data-testid="test-date-overlay"
          >
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </li>
          <li
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
            }}
            data-testid="test-date-tomorrow"
          >
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </li>
          <li
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, "day").format("DD/MM/YYYY"));
            }}
            data-testid="test-date-next-week"
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next Week</span>
          </li>
        </ul>
      </div>
    )
  );
};
