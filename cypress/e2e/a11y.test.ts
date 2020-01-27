/// <reference types="Cypress" />

describe('Accessibility checks', () => {
  before(() => {
    cy.visit('/').wait(500)
    cy.injectAxe()
  })
  beforeEach(() => {
  })
  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y()
  })
})
