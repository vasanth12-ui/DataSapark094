describe('W3Schools Login Page', () => {
    it('Should load the login page and verify the title', () => {
      cy.visit('https://profile.w3schools.com/login');
      cy.title().should('include', 'Login');
    });
    
        it('Should verify that the email and password input fields are visible on the login page', () => {
          cy.visit('https://profile.w3schools.com/login');
          
          // Check if the email input field is visible
          cy.get('input[name="email"]').should('be.visible');
          
          // Check if the password input field is visible
          cy.get('input[name="password"]').should('be.visible');
        });
    
            it('Should verify that the "Login" button is visible and clickable', () => {
              cy.visit('https://profile.w3schools.com/login');
              
              // Verify that the "Login" button is visible
              cy.contains('Login').should('be.visible');
              
              // Verify that the button is clickable (without filling in the fields)
              cy.contains('Login').click();
              cy.url().should('include', '/login'); // Ensuring it stays on the login page if no credentials are entered
            });
          
            
                it('Should show an error message when submitting the form with empty fields', () => {
                  cy.visit('https://profile.w3schools.com/login');
                  
                  // Click the login button without entering any details
                  cy.contains('Login').click();
                  
                  // Verify that an error message is shown
                  cy.get('.w3-red').should('be.visible').and('contain', 'Please fill in both fields');
                });
                
                    it('Should successfully log in with valid credentials', () => {
                      cy.visit('https://profile.w3schools.com/login');
                      
                      // Enter valid email and password (use your own valid credentials or mock)
                      cy.get('input[name="email"]').type('vasanthakumarg1212@gmail.com');
                      cy.get('input[name="password"]').type('vasanth1234');
                      
                      // Click the "Login" button
                      cy.contains('Login').click();
                      
                      // Verify that the user is redirected to the profile page or a dashboard
                      cy.url().should('include', '/profile'); 
                      cy.contains('Welcome').should('be.visible'); 
                    });
                  
                    
                        it('Should log out successfully and redirect to the login page', () => {
                          cy.visit('https://profile.w3schools.com/login');
                          
                          // Login with valid credentials
                          cy.get('input[name="email"]').type('vasanthakumarg1212@gmail.com');
                          cy.get('input[name="password"]').type('vasanth1234');
                          cy.contains('Login').click();
                          
                          // Click the logout button
                          cy.contains('Log Out').click();
                          
                          // Verify that the user is redirected to the login page
                          cy.url().should('include', '/login');
                          cy.contains('Login').should('be.visible'); // Ensure "Login" is visible on the login page
                        })                   
  });