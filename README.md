
# Cypress Automation Framework

Cypress automation framework overview


## Launch cypress

Clone the project

```bash
  ./node_modules/.bin/cypress open
```

## Run single test

it.only()

running individual test via command line
```bash
  ./node_modules/.bin/cypress run --spec cypress/integration/automation-test-store/contact-us.js
```
https://docs.cypress.io/guides/guides/command-line#How-to-run-commands

## Run commands in terminals

Tests will be run in headless mode with electron
https://docs.cypress.io/guides/guides/command-line#How-to-run-commands

```bash
  ./node_modules/.bin/cypress run
```


