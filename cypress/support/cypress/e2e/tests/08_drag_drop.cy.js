describe('HTML5 drag and drop', () => {
  beforeEach(() => {
    cy.visit('/drag_and_drop');
    cy.get('#column-a header').should('have.text', 'A');
    cy.get('#column-b header').should('have.text', 'B');
  });

  it('swaps the labels when dragging A onto B', () => {
    cy.get('#column-a').drag('#column-b');
    cy.get('#column-a header').should('have.text', 'B');
    cy.get('#column-b header').should('have.text', 'A');
  });

  it('swaps the labels when dragging B onto A', () => {
    cy.get('#column-b').drag('#column-a');
    cy.get('#column-a header').should('have.text', 'B');
    cy.get('#column-b header').should('have.text', 'A');
  });
});
