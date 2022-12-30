import { it } from 'mocha';

describe('Test settings', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212/');
  });

  describe('Action - Change theme', () => {
    it('Should change theme', () => {
      cy.get('#navbar').should('be.visible');

      cy.get('[data-cy="nav-button-settings"]').should('exist').click();

      cy.get('[data-cy="settings-header-main"]')
        .should('exist')
        .should('have.css', 'color')
        .and('eq', 'rgb(30, 30, 30)');

      cy.get('[data-cy="theme-checkbox"]').should('exist').click();

      cy.get('[data-cy="settings-header-main"]')
        .should('exist')
        .should('have.css', 'color')
        .and('eq', 'rgb(255, 255, 255)');
    });
  });
});
