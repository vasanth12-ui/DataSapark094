describe('W3Schools Campus Course Catalog', () => {
    it('Should load the course catalog page and verify the title', () => {
      cy.visit('https://campus.w3schools.com/en-in/collections/course-catalog');
      cy.title().should('include', 'W3Schools Campus');
    });

        it('Should verify that the "Browse Courses" button is visible and clickable', () => {
          cy.visit('https://campus.w3schools.com/en-in/collections/course-catalog');
          
          // Verify that the "Browse Courses" button is visible
          cy.contains('Browse Courses').should('be.visible');
          
          // Click the "Browse Courses" button and verify the URL changes
          cy.contains('Browse Courses').click();
          cy.url().should('include', '/courses');
        });
            it('Should verify that the course list section is visible on the page', () => {
              cy.visit('https://campus.w3schools.com/en-in/collections/course-catalog');
              
              // Check if the course categories or sections are visible
              cy.get('.col-12 .row').should('be.visible'); // Assuming course list is inside a row
            });
          
                it('Should verify that there are at least 5 courses listed on the page', () => {
                  cy.visit('https://campus.w3schools.com/en-in/collections/course-catalog');
                  
                  // Check the number of course cards or items listed
                  cy.get('.col-lg-3').should('have.length.greaterThan', 4); // Assuming course items are in .col-lg-3 cards
                });
                    it('Should verify that clicking a course link redirects to the course details page', () => {
                      cy.visit('https://campus.w3schools.com/en-in/collections/course-catalog');
                      
                      // Click on the first course link and verify the URL changes
                      cy.get('.col-lg-3 a').first().click(); // Click the first course link
                      cy.url().should('include', '/course/'); // Verify the URL includes "/course/"
                    });
                
                   
              });
    

  