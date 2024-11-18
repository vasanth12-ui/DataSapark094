describe('Alert Buttons Page', () => {
    it('Should load the alert buttons page and verify the title', () => {
      cy.visit('https://www.w3schools.com/howto/howto_css_alert_buttons.asp');
      cy.title().should('include', 'How To - CSS Alert Buttons');
    });

    
        it('Should show an alert when "Click Me" button is clicked', () => {
          cy.visit('https://www.w3schools.com/howto/howto_css_alert_buttons.asp');
          
          // Stub the alert to avoid it blocking the test and verify its text
          cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello! I am an alert box!');
          });
          
          // Click on the first alert button
          cy.contains('Click Me').click();
        });
      
        
            it('Should show an alert when "Click Me" button is clicked', () => {
              cy.visit('https://www.w3schools.com/howto/howto_css_alert_buttons.asp');
              
              // Stub the alert to avoid it blocking the test and verify its text
              cy.on('window:alert', (str) => {
                expect(str).to.equal('Hello! I am an alert box!');
              });
              
              // Click on the first alert button
              cy.contains('Click Me').click();
            });
          
  it('Should verify that the "Try it Yourself" button is visible', () => {
    cy.visit('https://www.w3schools.com/howto/howto_css_alert_buttons.asp');
    
    // Verify the "Try it Yourself" button is visible
    cy.contains('Try it Yourself').should('be.visible');
  });

    it('Should verify there are 3 alert buttons on the page', () => {
      cy.visit('https://www.w3schools.com/howto/howto_css_alert_buttons.asp');
      
      // Check the number of alert buttons
      cy.get('.w3-button').should('have.length', 3);
    });
            
  });
  