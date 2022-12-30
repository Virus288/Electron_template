import { it } from 'mocha';

describe('Test debug', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212/');
  });

  describe('Action - Toggle notification', () => {
    it('Should toggle notification', () => {
      cy.get('#navbar').should('be.visible');

      cy.get('[data-cy="nav-button-debug"]').should('exist').click();

      cy.url().should('eq', 'http://localhost:1212/#/debug');
      cy.get('[data-cy="debug-header-main"]').should('exist');

      cy.get('[data-cy="debug-form-notification"]').should('exist');
      cy.get('[data-cy="debug-form-notification"] input').should('exist').type('testing');
      cy.get('[data-cy="debug-form-notification"] button').should('exist').click();

      cy.get('[data-cy="notification-body"]').should('exist');
      cy.get('[data-cy="notification-button-disable"]').should('exist').click();

      cy.get('[data-cy="notification-body"]').should('not.exist');
    });
  });
});
