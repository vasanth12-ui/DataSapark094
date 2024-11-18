describe('W3Schools Spaces Page', () => {
    it('Should load the Spaces page and verify the title', () => {
      cy.visit('https://spaces.w3schools.com/space/');
      cy.title().should('include', 'W3Schools Spaces');
    });

        it('Should verify that the "Get Started" button is visible and clickable', () => {
          cy.visit('https://spaces.w3schools.com/space/');
          
          // Verify that the "Get Started" button is visible
          cy.contains('Get Started').should('be.visible');
          
          // Click the "Get Started" button and verify the URL changes
          cy.contains('Get Started').click();
          cy.url().should('include', 'create-account'); // Assuming it redirects to the create account page
        });
        
            it('Should verify that the email and password fields are visible in the signup form', () => {
              cy.visit('https://spaces.w3schools.com/space/');
              
              // Check if the email input field is visible
              cy.get('input[name="email"]').should('be.visible');
              
              // Check if the password input field is visible
              cy.get('input[name="password"]').should('be.visible');
            });
            
                it('Should verify that the "Log In" link is visible and clickable', () => {
                  cy.visit('https://spaces.w3schools.com/space/');
                  
                  // Verify the "Log In" link is visible
                  cy.contains('Log In').should('be.visible');
                  
                  // Click on the "Log In" link and verify the URL changes
                  cy.contains('Log In').click();
                  cy.url().should('include', 'login'); // Assuming it redirects to the login page
                });
            
                    it('Should verify that the available subscription plans are visible on the page', () => {
                      cy.visit('https://spaces.w3schools.com/space/');
                      
                      // Check if the subscription plans (like Free Plan, Premium Plan) are visible
                      cy.contains('Free Plan').should('be.visible');
                      cy.contains('Premium Plan').should('be.visible');
                    });
                
                   
  });
  