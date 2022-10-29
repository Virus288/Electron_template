import { it } from 'mocha';

describe('Test redux', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212/');
  });

  describe('Action - Toggle popup', () => {
    it('Should toggle navbar', () => {
      cy.get('#app').should('exist');

      cy.window()
        .its('store')
        .invoke('getState')
        .its('popup')
        .its('message')
        .should('equal', null);

      // Click button to toggle popup
    });
  });

  describe('Action - Toggle settings', () => {});

  describe('Action - Toggle loading', () => {});
});
