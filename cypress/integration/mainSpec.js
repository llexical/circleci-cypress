const elem = require('../fixtures/elements.json');

describe('Main Flow', () => {
  beforeEach(() => cy.visit('/'));

  it('Should show "CircleCi Cypress Demo" as the title', () => {
    cy.title().should('eq', 'CircleCi Cypress Demo');
  });
});
