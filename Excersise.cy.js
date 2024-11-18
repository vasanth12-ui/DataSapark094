describe('W3Schools Exercises Page', () => {
    it('Should load the Exercises page and verify the title', () => {
      cy.visit('https://www.w3schools.com/exercises/index.php');
      cy.title().should('include', 'W3Schools Exercises');
    });
    
        it('Should verify that the "Start Exercise" button for HTML Basic is visible and clickable', () => {
          cy.visit('https://www.w3schools.com/exercises/index.php');
          
          // Verify that the "Start Exercise" button for HTML Basic is visible
          cy.contains('Start Exercise').first().should('be.visible');
          
          // Click the "Start Exercise" button and verify the URL changes
          cy.contains('Start Exercise').first().click();
          cy.url().should('include', 'html_exercises.asp'); // Check if redirected to HTML exercises
        });
        
            it('Should verify that the exercise categories are visible on the page', () => {
              cy.visit('https://www.w3schools.com/exercises/index.php');
              
              // Check if categories are visible
              cy.get('.w3-bar-item').should('be.visible'); // The categories are in the sidebar as .w3-bar-item
            });
                it('Should verify that there are at least 10 exercises listed on the page', () => {
                  cy.visit('https://www.w3schools.com/exercises/index.php');
                  
                  // Check the number of exercise links listed
                  cy.get('.w3-btn').should('have.length.greaterThan', 9); // There should be more than 9 exercise buttons
                });
              
                    it('Should verify that clicking the "HTML Basic" exercise redirects to the correct page', () => {
                      cy.visit('https://www.w3schools.com/exercises/index.php');
                      
                      // Click the "HTML Basic" exercise link and verify the URL changes
                      cy.contains('HTML Basic').click();
                      cy.url().should('include', 'html_exercises.asp'); // Check if redirected to HTML exercises page
                    });
                      
  });
  