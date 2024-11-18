describe('Java Tutorial Page', () => {
    it('Should load the Java tutorial page and verify the title', () => {
      cy.visit('https://www.w3schools.com/java/default.asp');
      cy.title().should('include', 'Java Tutorial');
    });
    
        it('Should verify that the "Learn Java" button is visible', () => {
          cy.visit('https://www.w3schools.com/java/default.asp');
          
          // Verify that the "Learn Java" button is visible
          cy.contains('Learn Java').should('be.visible');
        });
    
            it('Should verify that the Table of Contents is visible on the left side', () => {
              cy.visit('https://www.w3schools.com/java/default.asp');
              
              // Check if the Table of Contents (left sidebar) is visible
              cy.get('.w3-sidebar').should('be.visible');
            });
                it('Should verify that there are at least 7 sections in the Table of Contents', () => {
                  cy.visit('https://www.w3schools.com/java/default.asp');
                  
                  // Check the number of sections (links) in the Table of Contents
                  cy.get('.w3-sidebar a').should('have.length.greaterThan', 6); // Expecting more than 6 sections
                });
              
    
                    it('Should verify that the "Java Examples" link is visible and clickable', () => {
                      cy.visit('https://www.w3schools.com/java/default.asp');
                      
                      // Verify the "Java Examples" link is visible
                      cy.contains('Java Examples').should('be.visible');
                      
                      // Click the "Java Examples" link and verify the page changes
                      cy.contains('Java Examples').click();
                      cy.url().should('include', 'java/java_examples.asp');
                    });
                    
  });
  