import { fileURLToPath } from "node:url";
import ts from "typescript";
import { describe, expect, it } from "vitest";

describe("tsconfig base", () => {
  it("turns on strict, noUncheckedIndexedAccess, and declaration", () => {
    const path = fileURLToPath(new URL("../tsconfig.base.json", import.meta.url));
    const file = ts.readConfigFile(path, ts.sys.readFile);
    expect(file.error).toBeUndefined();
    const { options, errors } = ts.parseJsonConfigFileContent(file.config, ts.sys, ".");
    expect(errors.filter((error) => error.code !== 18003)).toEqual([]);
    expect(options.strict).toBe(true);
    expect(options.noUncheckedIndexedAccess).toBe(true);
    expect(options.declaration).toBe(true);
  });
});
