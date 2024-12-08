import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      collectCoverageFrom: [
        "src/**/*/.jsx",
        "!src/hooks/*.jsx",
        "!src/context/*.jsx",
      ],
      coverageThreshold: {
        global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
        },
      },
      coverageReporters: ["html", "text"],
    },
  },
});
