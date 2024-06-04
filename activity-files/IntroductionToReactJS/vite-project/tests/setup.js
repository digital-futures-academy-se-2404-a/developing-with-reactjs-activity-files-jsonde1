import { afterEach } from "vitest";
import { cleanup, expect } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});
