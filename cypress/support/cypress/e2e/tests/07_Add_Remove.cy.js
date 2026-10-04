describe('Dynamic element creation and deletion', () => {
  beforeEach(() => cy.visit('/add_remove_elements/'));

  it('creates a delete button after adding an element', () => {
    cy.get('.added-manually').should('not.exist');
    cy.contains('button', 'Add Element').click();
    cy.get('.added-manually').should('have.length', 1).and('be.visible');
  });

  it('removes one element without removing its siblings', () => {
    cy.contains('button', 'Add Element').click().click().click();
    cy.get('.added-manually').should('have.length', 3);
    cy.get('.added-manually').first().click();
    cy.get('.added-manually').should('have.length', 2);
  });
});
