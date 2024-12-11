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
    const testHierarchy = getTestHierarchy(runnable);
    const cleanedHierarchy = testHierarchy.filter((title, index, self) => self.indexOf(title) === index);
    const fullTestName = cleanedHierarchy.join(' -- ');

    // Remove the "<smoke>" tag from the context
    const fullTestNameWithoutSmoke = fullTestName.replace(' <smoke>', '');

    const MAX_SPEC_NAME_LENGTH = 220;
    const fullTestNameTruncated = fullTestNameWithoutSmoke.slice(0, MAX_SPEC_NAME_LENGTH);

    const imageUrl = `screenshots/${fullTestNameTruncated} (failed) (attempt 2).png`;
    addContext({ test }, imageUrl);
  }
});