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
          <li data-testid="test-date-today">
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format("DD/MM/YYYY"));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format("DD/MM/YYYY"));
              }}
              role="button"
              aria-label="Select today as the task date"
              tabIndex={0}
            >
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </div>
          </li>
          <li data-testid="test-date-tomorrow">
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
              }}
              tabIndex={0}
              aria-label="Select tomorrow as the task date"
              role="button"
            >
              <span>
                <FaSun />
              </span>
              <span>Tomorrow</span>
            </div>
          </li>
          <li data-testid="test-date-next-week">
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, "day").format("DD/MM/YYYY"));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, "day").format("DD/MM/YYYY"));
              }}
              tabIndex={0}
              aria-label="Select next week as the task date"
              role="button"
            >
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Next Week</span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};
