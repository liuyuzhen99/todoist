/* eslint-disable no-unused-vars */
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Projects } from "../components/Projects";
import { vi, beforeEach, describe, it, expect, afterEach } from "vitest";

beforeEach(cleanup);
