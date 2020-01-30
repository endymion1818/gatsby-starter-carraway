// load type definitions that come wxith Cypress module
/// <reference types="cypress" />

/* tslint:disable */
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<Element>
    injectAxe(): Chainable<EventEmitter>
    checkA11y(): Chainable<EventEmitter>
  }
}
/* tslint:enable */
