import { format } from "prettier";
import { describe, expect, it } from "vitest";
import config from "../src/prettier.js";

describe("prettier config", () => {
  it("does not wrap a line between 81 and 120 characters", async () => {
    const code = `export const message = "${"a".repeat(80)}";\n`;
    expect(code.length).toBeGreaterThan(81);
    expect(code.length).toBeLessThan(120);
    expect(await format(code, { ...config, parser: "typescript" })).toBe(code);
  });
});
