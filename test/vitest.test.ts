import { describe, expect, it } from "vitest";
import config from "../src/vitest.js";

describe("vitest config", () => {
  it("includes unit tests under test/", () => {
    expect(config.test?.include).toEqual(["test/**/*.test.ts"]);
  });
});
