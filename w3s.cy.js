describe('W3Schools Login Page Testing', () => {
    const baseUrl = 'https://profile.w3schools.com/';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('should load the login page', () => {
      cy.url().should('include', '/login');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="current-password"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible').and('contain', 'Log in');
    });
  
    it('should show error for invalid login', () => {
      cy.get('input[name="email"]').type('invaliduser@example.com');
      cy.get('input[name="current-password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();
      cy.get('.error-message') // Adjust selector based on actual DOM structure
        .should('be.visible')
        .and('contain', 'Invalid email or password');
    });
  
    it('should allow valid login', () => {
      // Replace with valid credentials
      const validEmail = 'your-email@example.com';
      const validPassword = 'your-password';
  
      cy.get('input[name="email"]').type(validEmail);
      cy.get('input[name="current-password"]').type(validPassword);
      cy.get('button[type="submit"]').click();
  
      // Assert user is redirected to the dashboard or home page
      cy.url().should('not.include', '/login');
      cy.get('.welcome-message') // Adjust based on actual DOM structure
        .should('be.visible')
        .and('contain', 'Welcome');
    });
  });