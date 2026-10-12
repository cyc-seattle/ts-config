import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";
import config from "../src/eslint.js";

async function lint(code: string) {
  const eslint = new ESLint({ cwd: process.cwd(), overrideConfigFile: true, overrideConfig: config });
  const [result] = await eslint.lintText(code, { filePath: "example.ts" });
  return result?.messages ?? [];
}

describe("eslint config", () => {
  it("warns on any", async () => {
    const messages = await lint("export const value: any = 1;\n");
    expect(messages).toMatchObject([{ ruleId: "@typescript-eslint/no-explicit-any", severity: 1 }]);
  });

  it("errors on an unused variable", async () => {
    const messages = await lint("const unused = 1;\n");
    expect(messages).toMatchObject([{ ruleId: "@typescript-eslint/no-unused-vars", severity: 2 }]);
  });

  it("ignores formatting-only differences", async () => {
    const messages = await lint("export const   value  =  { a:1,b:2 }\n\n\n");
    expect(messages).toEqual([]);
  });

  it("turns off recommended rules that conflict with Prettier", async () => {
    const eslint = new ESLint({ cwd: process.cwd(), overrideConfigFile: true, overrideConfig: config });
    const resolved = await eslint.calculateConfigForFile("example.ts");
    expect(resolved?.rules?.["no-unexpected-multiline"]).toEqual([0]);
  });
});
