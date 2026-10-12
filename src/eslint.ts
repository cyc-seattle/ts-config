import js from "@eslint/js";
import type { Linter } from "eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

const config: Linter.Config[] = [
  { ignores: ["**/dist", "**/coverage", "**/node_modules", "pnpm-lock.yaml"] },
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { rules: { "@typescript-eslint/no-explicit-any": "warn" } },
  // Last, so it turns off every rule that conflicts with Prettier.
  prettier,
];

export default config;
