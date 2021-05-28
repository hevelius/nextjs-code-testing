context('Deploy', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('should click on the Blog section in the homepage', () => {
      cy.get('h2')
        .contains('Blog')
        .click()
    });
  });
