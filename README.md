# @cyc-seattle/ts-config

Shared ESLint, Prettier, TypeScript, Vitest, and lefthook config for CYC Seattle repos.

```sh
pnpm add -D @cyc-seattle/ts-config eslint prettier typescript vitest
```

## ESLint

`eslint.config.mjs`:

```js
export { default } from "@cyc-seattle/ts-config/eslint";
```

The config uses Node globals. A browser package adds its own.

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

## lefthook

`lefthook.yml`:

```yaml
extends:
  - node_modules/@cyc-seattle/ts-config/lefthook.base.yml
```

The `pre-commit` hook checks staged files with Prettier and ESLint. It never fixes them. If a commit fails, run `mise run format`.
