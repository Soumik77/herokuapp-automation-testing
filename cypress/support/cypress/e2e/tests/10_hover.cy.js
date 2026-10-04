describe('Hover profile cards', () => {
  beforeEach(() => cy.visit('/hovers'));

  [1, 2, 3].forEach((userNumber) => {
    it(`reveals and hides the caption for user ${userNumber}`, () => {
      cy.get('h3').realHover();
      cy.get('.figure').eq(userNumber - 1).find('.figcaption').should('not.be.visible');
      cy.get('.figure').eq(userNumber - 1).realHover();
      cy.get('.figure').eq(userNumber - 1).find('.figcaption')
        .should('be.visible').and('contain.text', `name: user${userNumber}`);
      cy.get('.figure').eq(userNumber - 1).find('.figcaption a')
        .should('have.attr', 'href', `/users/${userNumber}`);
      cy.get('h3').realHover();
      cy.get('.figure').eq(userNumber - 1).find('.figcaption').should('not.be.visible');
    });
  });
});
