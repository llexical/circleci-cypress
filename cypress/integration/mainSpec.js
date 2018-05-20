const input = '#test-todo-input';
const submit = '#test-todo-submit';
const items = '.test-todo-list li';

describe('Main Flow', () => {
  beforeEach(() => cy.visit('/'));

  it('Should show "CircleCi Cypress Demo" as the title', () => {
    cy.title().should('eq', 'CircleCi Cypress Demo');
  });

  it('should add an item to the list', () => {
    cy.get('#test-todo-input').type('shoreditch');
    cy.get(submit).click();

    cy.get(items).should('length.to.be', 1);
  });

  it('should remove an item from the list when you click on it', () => {
    cy.get(input).type('shoreditch');
    cy.get(submit).click();
    cy.get(items).click();

    cy.get(items).should('length.to.be', 0);
  });
});
