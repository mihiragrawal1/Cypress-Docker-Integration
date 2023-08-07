describe('Web Application', () => {
    beforeEach(() => {
      cy.visit("https://practicetestautomation.com/practice-test-login/");
    });
  
    it('should display the login page', () => {
        cy.url().should('eq',"https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').should('be.visible')
        cy.get('#password').should('be.visible')
    });
  

    it('shows an error message on invalid login', () => {
        const invalidUsername = 'invalid_username';
        const invalidPassword = 'invalid_password';
    
        cy.get('#username').type(invalidUsername);
        cy.get('#password').type(invalidPassword);
        cy.get('#submit').click();
        cy.get('#error').should('be.visible')
        cy.get('#error').contains("is invalid!")
    
      });

      it('logs in successfully with valid credentials', () => {
        const validUsername = 'student';
        const validPassword = 'Password123';
        const afterlogin_url="https://practicetestautomation.com/logged-in-successfully/"
    
        cy.get('#username').type(validUsername);
        cy.get('#password').type(validPassword);
        cy.get('#submit').click();
    
        cy.url().should('eq',afterlogin_url)
        cy.get('.wp-block-button__link').should('be.visible')          //logout button must be visible
      });





  });