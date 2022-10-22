describe('Log in page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212/');
  });

  describe('Action - LogIn', () => {
    it('Should log in with proper credentials', () => {
      cy.get('form').within(() => {
        cy.get('input[name="login"]').type(loginCredentials.login);
        cy.get('input[name="password"]').type(loginCredentials.password);
        cy.get('input[name="companyName"]').type(loginCredentials.companyName);
        cy.get('button').click();
      });
      cy.get('.loginForm').should('not.exist');
      cy.get('.homePanel').should('be.visible');
    });

    it('Should show error on wrong credentials', () => {
      cy.get('form').within(() => {
        cy.get('input[name="login"]').type(
          `${loginCredentials.login}123123123`
        );
        cy.get('input[name="password"]').type(loginCredentials.password);
        cy.get('input[name="companyName"]').type(loginCredentials.companyName);
        cy.get('button').click();
      });
      cy.get('.formError').should('be.visible');
      cy.get('.formError').should('have.text', 'Invalid credentials');
    });

    it('Should show error on wrong password form', () => {
      cy.get('form').within(() => {
        cy.get('input[name="login"]').type(loginCredentials.login);
        cy.get('input[name="password"]').type('eee');
        cy.get('input[name="companyName"]').type(loginCredentials.companyName);
        cy.get('button').click();
      });
      cy.get('.formError').should('be.visible');
      cy.get('.formError').should('have.text', 'Bad password format');
    });
  });
});
