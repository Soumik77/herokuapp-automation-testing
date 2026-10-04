# Test plan

## Objective

Check the visible outcomes of common web interactions on The Internet demonstration application. Keep each scenario independent and record enough evidence to investigate failures.

## Scenario inventory

| Spec | Scenarios | Expected outcome |
| --- | ---: | --- |
| `01_drop_down.cy.js` | 3 | Disabled placeholder; correct value and text for both options |
| `02_file_download.cy.js` | 2 | Download links exist; listed text file is retrieved and saved intact |
| `03_file_upload.cy.js` | 1 | Synthetic file upload is acknowledged with the correct filename |
| `04_javascript_alert.cy.js` | 5 | Alert accepted; confirm accepted/cancelled; prompt submitted/cancelled |
| `05_login_auth.cy.js` | 5 | Valid login/logout; invalid username/password and empty fields rejected |
| `06_checkbox.cy.js` | 2 | Both initial checkbox states can be toggled and restored |
| `07_Add_Remove.cy.js` | 2 | Element is added; deleting one of three leaves two |
| `08_drag_drop.cy.js` | 2 | Dragging in either direction swaps the labels |
| `09_forgot_password.cy.js` | 2 | Controls are present; submitted email reaches a stubbed endpoint |
| `10_hover.cy.js` | 3 | Each profile's caption appears and hides with pointer movement |
| **Total** | **27** | Counts describe test cases, not a recorded pass result |

## Test boundaries

All feature tests use live demo pages. Password-recovery submission alone receives a synthetic intercepted response; this is a request-construction check, not an email-delivery test. Download retrieval uses `cy.request` and file read/write commands, not a browser download click.

The suite does not assess performance, accessibility, security, database integrity, or full cross-browser compatibility. Its supported execution browsers are Electron and Chrome. Availability of the public website and of a listed `.txt` download are external dependencies.

## Run and investigate

1. Install the locked dependencies with `npm ci` and run `npm test`.
2. Record the commit, browser, command, date, and actual pass/fail counts.
3. Open `cypress/reports/index.html`; inspect screenshots and video for failed scenarios.
4. Determine whether the failure concerns an assertion, selector, application behavior, network, or local setup. Do not relabel a timeout as an application defect without evidence.
5. Reproduce a failure with its single spec, for example:

   ```sh
   npm test -- --spec cypress/e2e/tests/05_login_auth.cy.js
   ```

6. Document the observed and expected behavior, fix the cause where appropriate, and rerun the affected scenario. A change to a shared helper or configuration warrants a complete suite run.

## Completion evidence

A successful run means all 27 scenarios passed on the tested browser against the available demo at that time. GitHub Actions results and their downloadable artifacts provide execution evidence. Keep generated reports and recordings out of source control; do not claim a pass rate from the test inventory alone.
