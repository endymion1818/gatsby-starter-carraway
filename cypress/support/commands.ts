import * as axe from 'axe-core'

declare global {
  /* tslint:disable */
  interface Window {
    axe: typeof axe
  }
  /* tslint:enable */
}

Cypress.Commands.add('injectAxe', () => {
  cy.window({ log: false }).then(window => {
    window.axe = axe
  })
})
