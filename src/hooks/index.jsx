/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "rGMCGCjvoe0rGvGu3h5R");
  }, []);
};
