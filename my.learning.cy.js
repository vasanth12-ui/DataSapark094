describe('W3Schools Learning Paths Page', () => {
    it('Should load the Learning Paths page and verify the title', () => {
      cy.visit('https://pathfinder.w3schools.com/learningpaths');
      cy.title().should('include', 'Learning Paths');
    });

        it('Should verify that the Learning Paths section is visible on the page', () => {
          cy.visit('https://pathfinder.w3schools.com/learningpaths');
          
          // Check if the learning paths section is visible
          cy.contains('Learning Paths').should('be.visible');
        });
        
            it('Should verify that at least one learning path is displayed on the page', () => {
              cy.visit('https://pathfinder.w3schools.com/learningpaths');
              
              // Check if there are any learning paths listed on the page
              cy.get('.w3-card-4').should('have.length.greaterThan', 0); // Assumes learning paths are within elements with the class '.w3-card-4'
            });
            
                it('Should verify that the "Start Learning" button for a learning path is visible and clickable', () => {
                  cy.visit('https://pathfinder.w3schools.com/learningpaths');
                  
                  // Check if the "Start Learning" button is visible for at least one learning path
                  cy.contains('Start Learning').first().should('be.visible');
                  
                  // Click the "Start Learning" button and verify the URL changes
                  cy.contains('Start Learning').first().click();
                  cy.url().should('include', '/learning-paths'); // Check if redirected to learning path details page
                });
                    it('Should return results when searching for a learning path', () => {
                      cy.visit('https://pathfinder.w3schools.com/learningpaths');
                      
                      // Enter a search term (e.g., "Web Development")
                      cy.get('input[placeholder="Search learning paths"]').type('Web Development');
                      
                      // Verify that at least one learning path related to "Web Development" appears in the search results
                      cy.contains('Web Development').should('be.visible');
                    });
                  
                  
  });
  