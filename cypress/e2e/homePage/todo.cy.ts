describe('Log in page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212/');
  });

  const getRandom = (): { email: string; name: string } => {
    let email = '';
    let name = '';
    const amount = 5;

    for (let x = 0; x < amount; x++) {
      email += Math.round(Math.random() * 50).toString();
    }
    email += '@test.test';
    for (let x = 0; x < amount; x++) {
      name += Math.round(Math.random() * 50).toString();
    }
    return { email, name };
  };

  const loginCredentials = {
    companyName: 'marcinb',
    login: 'marcin@company.com',
    password: 'Password1',
  };

  describe('View - Render login', () => {
    it('Should contain form', () => {
      cy.get('.loginForm').should('exist');
    });

    it('Should not contain errors at start', () => {
      cy.get('.formError').should('not.exist');
    });
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

  describe('Action - Register', () => {
    beforeEach(() => {
      cy.contains('button', 'Register').click();
    });
    it('Should show error on wrong email', () => {
      cy.get('form').within(() => {
        cy.get('input[name="email"]').type('wrongEmail');
        cy.get('input[name="password"]').type(loginCredentials.password);
        cy.get('input[name="companyName"]').type(loginCredentials.companyName);
        cy.get('button').click();
      });
      cy.get('.formError').should('be.visible');
      cy.get('.formError').should('have.text', 'Bad e-mail format');
    });

    it('Should show error on email already registered', () => {
      cy.get('form').within(() => {
        cy.get('input[name="email"]').type(loginCredentials.login);
        cy.get('input[name="password"]').type(loginCredentials.password);
        cy.get('input[name="companyName"]').type(loginCredentials.companyName);
        cy.get('button').click();
      });
      cy.get('.formError').should('be.visible');
      cy.get('.formError').should('have.text', 'Account already existing');
    });

    it('Should show error on company name too long', () => {
      cy.get('form').within(() => {
        cy.get('input[name="email"]').type(
          'wnjasssssssssjsdjasnkj@asnkdamksldkj.com'
        );
        cy.get('input[name="password"]').type(loginCredentials.password);
        cy.get('input[name="companyName"]').type(
          'CompletlyRandomCompanyNameDupaINC'
        );
        cy.get('button').click();
      });
      cy.get('.formError')
        .should('be.visible')
        .should('have.text', 'Company name too long');
    });

    it('Should show error on too short password', () => {
      cy.get('form').within(() => {
        cy.get('input[name="email"]').type('wnjsnkj@asnkj.com');
        cy.get('input[name="password"]').type('a');
        cy.get('input[name="companyName"]').type('CompletlDupaINC');
        cy.get('button').click();
      });
      cy.get('.formError')
        .should('be.visible')
        .should('have.text', 'Bad password format');
    });

    it('Should show error on wrong password form', () => {
      cy.get('form').within(() => {
        cy.get('input[name="email"]').type(loginCredentials.login);
        cy.get('input[name="password"]').type('eee');
        cy.get('input[name="companyName"]').type(loginCredentials.companyName);
        cy.get('button').click();
      });
      cy.get('.formError').should('be.visible');
      cy.get('.formError').should('have.text', 'Bad password format');
    });

    it('Should register with proper credentials', () => {
      cy.get('form').within(() => {
        cy.get('input[name="email"]').type(getRandom().email);
        cy.get('input[name="password"]').type(loginCredentials.password);
        cy.get('input[name="companyName"]').type(getRandom().name);
        cy.get('button').click();
      });
      cy.get('.popup').should('be.visible');
    });
  });
});
