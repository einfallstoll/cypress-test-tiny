/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('http://localhost:1337/index.html')

    for (let i = 0; i < 10; i++) {
      cy.get('#regenerate').click();
      cy.wait(2000);
    }
  })
})
