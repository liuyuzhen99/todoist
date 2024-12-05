/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { firebase } from "../firebase";

export const Checkbox = ({ id, taskDesc }) => {
  const archiveTask = () => {
    firebase.firestore().collection("tasks").doc(id.id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      aria-label={`Mark ${taskDesc} as done?`}
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};
