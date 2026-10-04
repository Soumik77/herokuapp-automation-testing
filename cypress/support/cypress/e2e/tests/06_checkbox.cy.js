describe('Checkbox state', () => {
  beforeEach(() => cy.visit('/checkboxes'));

  it('checks and unchecks the initially unchecked checkbox', () => {
    cy.get('#checkboxes input[type="checkbox"]').eq(0)
      .should('not.be.checked').check().should('be.checked')
      .uncheck().should('not.be.checked');
  });

  it('unchecks and rechecks the initially checked checkbox', () => {
    cy.get('#checkboxes input[type="checkbox"]').eq(1)
      .should('be.checked').uncheck().should('not.be.checked')
      .check().should('be.checked');
  });
});
