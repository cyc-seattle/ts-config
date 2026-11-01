# AGENTS.md

Guidance for coding agents working in this repository.

## Overview

`@cyc-seattle/ts-config` is the shared ESLint, Prettier, TypeScript, Vitest, and lefthook config that every
cyc-seattle TypeScript repo uses. It's published to npm. See `README.md` for how a repo uses each part.

The repo checks itself with its own built config, so `check`, `test` and `format` build `dist/` first.

## Tasks

mise provides the tools. Run `mise trust`, then `mise run install`.

- `mise run ci`: `check`, then `test`
- `mise run check`: typecheck, Prettier check, ESLint
- `mise run format`: fix formatting and lint
- `mise run test`: run the tests with vitest
- `mise run build`: compile into `dist/`

## Releases

Every merge to `main` publishes to npm, with the version picked from the PR title (see `README.md`). A change here
reaches every repo when it takes the new version.

## Code style

TypeScript, ESM: import paths carry the `.js` extension. PR titles are conventional commits. Never push to `main`.

Comments explain **why**, not what. Keep them to a line or two, and cite an issue instead of recounting it.
