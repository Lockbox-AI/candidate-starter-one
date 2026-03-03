# candidate-starter-one

[![ci](https://github.com/jpfulton-lockboxai/candidate-starter-one/actions/workflows/ci.yml/badge.svg)](https://github.com/jpfulton-lockboxai/candidate-starter-one/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 22+](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org/)

A TypeScript starter scaffold for building RPA (Robotic Process Automation) applications using [Playwright](https://playwright.dev/) as a production browser automation library.

## Overview

This project uses Playwright's browser automation API directly in production code — not as a test runner. Jest is used for unit testing the automation logic with mocked Playwright instances.

## Prerequisites

- Node.js 22+
- Yarn 4 (`corepack enable && corepack prepare yarn@4.7.0 --activate`)

## Setup

```bash
# Install dependencies
yarn install

# Build
yarn build

# Run
yarn start
```

## Project Structure

```
src/
├── index.ts              # Entry point — calls run()
└── automation/
    └── example.ts        # Stub automation function — extend this

test/
└── automation/
    └── example.test.ts   # Jest unit tests (Playwright mocked)
```

## Development

```bash
yarn dev          # Run from source with tsx
yarn build        # Compile TypeScript to dist/
yarn test         # Run Jest unit tests
yarn lint         # ESLint
yarn lint:fix     # ESLint with auto-fix
yarn format       # Prettier
yarn format:check # Check Prettier formatting
yarn clean        # Remove dist/
```

## Testing

Unit tests mock the Playwright browser API so no real browser is needed in CI. Run integration tests against a real browser manually with `yarn dev` after implementing your automation.

## License

Copyright (c) 2025-2026 Lockbox AI, Inc.

Licensed under the [MIT License](LICENSE).
