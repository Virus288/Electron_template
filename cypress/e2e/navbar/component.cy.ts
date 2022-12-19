import { it } from 'mocha';

describe('Test navbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212/');
  });

  describe('Action - Toggle navbar', () => {
    it('Should toggle navbar', () => {
      cy.get('#navbar').should('be.visible');
      cy.get('.appInactive').should('exist');

      cy.get('#navToggle').should('be.visible');
      cy.get('#navToggle button').click();

      cy.get('.appFull').should('exist');
      cy.get('#navToggle button').click();

      cy.get('.appActive').should('exist');
      cy.get('#navToggle button').click();

      cy.get('.appInactive').should('exist');
    });
  });
});
