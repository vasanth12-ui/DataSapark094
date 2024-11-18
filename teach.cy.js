it('should have the correct page title', () => {
    cy.visit('https://www.w3schools.com/academy/teachers/index.php');
    cy.title().should('eq', 'Teachers - W3Schools Academy');
    it('should display a list of teachers', () => {
        cy.visit('https://www.w3schools.com/academy/teachers/index.php');
        cy.get('.teacher-list').should('be.visible');
      });
      it('should display a teacher\'s name', () => {
        cy.visit('https://www.w3schools.com/academy/teachers/index.php');
        cy.get('.teacher-name').first().should('have.text', 'John Doe'); // Adjust the name as per actual
      });
      it('should have a "Contact" button for each teacher', () => {
        cy.visit('https://www.w3schools.com/academy/teachers/index.php');
        cy.get('.teacher .contact-btn').should('be.visible');
      });
      it('should have a valid teacher profile link', () => {
        cy.visit('https://www.w3schools.com/academy/teachers/index.php');
        cy.get('.teacher-profile-link').first().should('have.attr', 'href').and('include', 'profile');
      });
    
        it('should filter teachers by subject', () => {
          cy.visit('https://www.w3schools.com/academy/teachers/index.php'); // URL of the teachers page
          cy.get('select[name="subject"]').select('Math'); // Assuming there is a filter dropdown for subjects
          cy.get('.teacher-list').children().each(($teacher) => {
            cy.wrap($teacher).should('contain', 'Math'); // Assuming the teacher's profile contains the subject name
          });
        });
      
                            
});
  