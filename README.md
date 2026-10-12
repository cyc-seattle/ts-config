# @cyc-seattle/ts-config

Shared ESLint, Prettier, TypeScript, Vitest, and lefthook config for cyc-seattle repos.

```sh
pnpm add -D @cyc-seattle/ts-config "@types/node@^22" "eslint@^9.39" "prettier@^3.4" "typescript@~5.9" "vitest@^4.1"
```

## ESLint

`eslint.config.mjs`:

```js
export { default } from "@cyc-seattle/ts-config/eslint";
```

The config uses Node globals. A browser package adds its own, with `pnpm add -D globals`:

```js
import config from "@cyc-seattle/ts-config/eslint";
import globals from "globals";

export default [...config, { languageOptions: { globals: globals.browser } }, { ignores: ["generated/**"] }];
```

## Prettier

`package.json`:

```json
{ "prettier": "@cyc-seattle/ts-config/prettier" }
```

## TypeScript

`tsconfig.json`:

```json
{ "extends": "@cyc-seattle/ts-config/tsconfig" }
```

## Vitest

`vitest.config.ts`:

```ts
export { default } from "@cyc-seattle/ts-config/vitest";
```

To run tests in other folders, replace `include`. `mergeConfig` would append to the default list instead.

```ts
import config from "@cyc-seattle/ts-config/vitest";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...config,
  test: { ...config.test, include: ["packages/*/test/**/*.test.ts"] },
});
```

## lefthook

`lefthook.yml`:

```yaml
extends:
  - node_modules/@cyc-seattle/ts-config/lefthook.base.yml
```

The `pre-commit` hook checks staged files with Prettier and ESLint. It never fixes them. If a commit fails, run `mise run format`.

## Release

Every merge to `main` releases from the PR title. The title must be a conventional commit.

| Title                                          | Release |
| ---------------------------------------------- | ------- |
| `fix:`                                         | Patch   |
| `feat:`                                        | Minor   |
| `!` after the type, or `BREAKING CHANGE`       | Major   |
| `chore:`, `docs:`, `ci:`, `test:`, `refactor:` | None    |

The release publishes to npm over OIDC, with provenance. Release notes are on the repo's GitHub releases.
