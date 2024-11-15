/* eslint-disable no-unused-vars */
import React from "react";
import { Siderbar } from "./Siderbar";
import { Tasks } from "../Tasks";

export const Content = () => {
  return (
    <section>
      <Siderbar />
      <Tasks />
    </section>
  );
};
