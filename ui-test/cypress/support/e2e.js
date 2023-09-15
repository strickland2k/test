// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import addContext from 'mochawesome/addContext'

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let item = runnable
    const nameParts = [runnable.title]

    // Iterate through all parents and grab the titles
    while (item.parent) {
      nameParts.unshift(item.parent.title)
      item = item.parent
    }

    if (runnable.hookName) {
      nameParts.push(`${runnable.hookName} hook`)
    }

    const MAX_SPEC_NAME_LENGTH = 220;
    const fullTestName = nameParts.filter(Boolean).join(" -- ").slice(0, MAX_SPEC_NAME_LENGTH);

    const fullTestName1 = fullTestName.replace('<', '').replace('>', '')

    const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName1} (failed) (attempt 2).png`

    addContext({ test }, imageUrl)
  }
})