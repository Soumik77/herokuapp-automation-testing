# Web Application Testing with Cypress

A JavaScript regression suite for [The Internet](https://the-internet.herokuapp.com/), a public demonstration website. The project practices functional testing, positive and negative scenarios, reusable test helpers, and HTML test reporting.

## Test coverage

The suite contains **27 scenarios across 10 feature areas**:

| Feature | What the tests check |
| --- | --- |
| Login | Successful login and logout; invalid and empty credentials |
| Dropdown | Initial placeholder, selected text, and stored value |
| Checkboxes | Checked and unchecked states after each interaction |
| JavaScript dialogs | Alert, confirmation, and prompt results |
| Add/remove elements | Element creation and deletion without removing siblings |
| File upload | A synthetic fixture uploads and its filename appears |
| File download | Links are listed; an HTTP request retrieves a listed text file |
| Drag and drop | Column labels swap after a drag operation |
| Password recovery | Form controls and the submitted request, with a stubbed response |
| Hover cards | Captions appear on hover and disappear when the pointer leaves |

See [TEST_PLAN.md](TEST_PLAN.md) for scenario counts, boundaries, and failure investigation steps. Scenario counts describe coverage, not a verified pass rate.

## Run locally

Install Node.js 22 and npm. The `.nvmrc` file specifies the intended Node.js version. If you use nvm, run `nvm use` in this directory.

```sh
git clone https://github.com/Soumik77/herokuapp-automation-testing.git
cd herokuapp-automation-testing
npm ci
npm test
```

`npm test` runs the suite in the bundled Electron browser. An internet connection is required for the public demo website and the initial Cypress download.

Other commands:

```sh
npm run test:open     # Interactive Cypress runner
npm run test:chrome   # Headless run using an installed Chrome browser
```

Hover tests use native browser events through `cypress-real-events`, which requires a Chromium-based browser. Firefox is outside this suite's supported browser scope. Linux users may need the [Cypress system dependencies](https://docs.cypress.io/app/get-started/install-cypress#Linux-Prerequisites), including Xvfb.

## Reports and continuous integration

After a test run, open `cypress/reports/index.html` for the Mochawesome HTML report. Cypress also records videos and saves screenshots of failures. These generated files are ignored by Git.

The included [GitHub Actions workflow](.github/workflows/cypress.yml) installs locked dependencies, runs `npm test`, and retains reports, screenshots, and videos as the `cypress-results` artifact for seven days. It is configured for pushes to `main`, pull requests targeting `main`, and manual runs. Check the repository's **Actions** tab for actual run results.

## Project structure

| Path | Purpose |
| --- | --- |
| `cypress/e2e/tests/` | Ten feature-specific spec files |
| `cypress/pages/` | Dropdown and download page helpers |
| `cypress/support/commands.js` | Reusable login command |
| `cypress/support/e2e.js` | Test support and plugin registration |
| `cypress/fixtures/upload-sample.txt` | Synthetic upload fixture |
| `cypress.config.js` | Base URL, spec discovery, timeouts, and reporting |
| `.github/workflows/cypress.yml` | Continuous integration configuration |

Each test creates its own required state. Assertions wait for expected results; the suite does not use fixed-duration sleeps.

## Scope and data handling

- This is a portfolio test suite against a demonstration application, not testing of a production service.
- Login tests use credentials published on the demo login page. They are not personal account credentials.
- Upload tests use synthetic text. Do not replace the fixture with personal documents or participant data.
- Password recovery uses `qa-demo@example.test` and intercepts the submission. It does not verify the server's recovery implementation or email delivery.
- The download test verifies HTTP retrieval and local byte preservation. It does not test a browser's download dialog. The demo file list can change.
- The public demo can be slow or unavailable. Investigate a failure before deciding whether it is a test defect, an application defect, or an environment issue.

## Tools

JavaScript, Cypress, `cypress-mochawesome-reporter`, `@4tw/cypress-drag-drop`, `cypress-real-events`, and GitHub Actions.
