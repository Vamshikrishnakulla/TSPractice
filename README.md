# TSPractice

A TypeScript-based Playwright practice project for learning and experimenting with end-to-end browser automation.

## Overview

This repository contains Playwright test scripts written in TypeScript. The Playwright configuration is set up to run tests from the `tests` directory against Chromium, Firefox, and WebKit.

The project is intended for practicing:

- Playwright test authoring
- Browser automation with TypeScript
- Page Object Model (POM) design
- End-to-end user flows
- API mocking
- Cross-browser testing
- Screenshots and traces for failed tests
- Playwright HTML test reports

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Playwright Test](https://playwright.dev/docs/intro)
- Node.js
- npm

## Prerequisites

- [Node.js](https://nodejs.org/) — use a current LTS version
- npm, included with Node.js

## Installation

```bash
git clone https://github.com/Vamshikrishnakulla/TSPractice.git
cd TSPractice
npm install
```

Install the Playwright browser binaries:

```bash
npx playwright install
```

On Linux environments, install the required operating-system dependencies as well:

```bash
npx playwright install --with-deps
```

## Running Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run tests in a specific browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests with the visible browser UI:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

## Test Reports

The project uses Playwright's HTML reporter. Open the latest report with:

```bash
npx playwright show-report
```

Screenshots are captured only when a test fails, and traces are retained for failed tests and retries. These artifacts can help diagnose test failures.

## Project Structure

```text
TSPractice/
├── tests/                 # Playwright test files
├── playwright.config.ts   # Playwright and browser project configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Configuration

The main Playwright configuration is in [`playwright.config.ts`](./playwright.config.ts).

Current defaults include:

- Test directory: `tests`
- Browser projects: Chromium, Firefox, and WebKit
- Parallel execution: disabled
- Retries: 2
- Reporter: HTML
- Screenshots: captured on failure
- Traces: retained on failure

A `baseURL` and development server can be added to the configuration when testing a locally hosted application.

## Writing a Test

Create a `.spec.ts` file inside the `tests` directory:

```typescript
import { test, expect } from '@playwright/test';

test('page has the expected title', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);
});
```

## Useful Commands

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies |
| `npx playwright install` | Install Playwright browsers |
| `npx playwright test` | Run the complete test suite |
| `npx playwright test --headed` | Run tests with visible browsers |
| `npx playwright test --debug` | Debug tests interactively |
| `npx playwright show-report` | Open the HTML test report |

## Contributing

1. Create a feature branch.
2. Add or update tests in the `tests` directory.
3. Run the test suite locally.
4. Review the generated report when necessary.
5. Open a pull request with a clear description of the changes.

## License

No license has been specified for this repository yet.
