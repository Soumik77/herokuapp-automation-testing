describe('JavaScript dialogs', () => {
  beforeEach(() => cy.visit('/javascript_alerts'));

  it('accepts an alert and checks its message and result', () => {
    const alert = cy.stub().as('alert');
    cy.on('window:alert', alert);
    cy.contains('button', 'Click for JS Alert').click();
    cy.get('@alert').should('have.been.calledOnceWithExactly', 'I am a JS Alert');
    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('accepts a confirmation dialog', () => {
    cy.on('window:confirm', (message) => {
      expect(message).to.equal('I am a JS Confirm');
      return true;
    });
    cy.contains('button', 'Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('cancels a confirmation dialog', () => {
    cy.on('window:confirm', () => false);
    cy.contains('button', 'Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Cancel');
  });

  it('submits text in a prompt dialog', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Portfolio test').as('prompt');
    });
    cy.contains('button', 'Click for JS Prompt').click();
    cy.get('@prompt').should('have.been.calledOnceWithExactly', 'I am a JS prompt');
    cy.get('#result').should('have.text', 'You entered: Portfolio test');
  });

  it('cancels a prompt dialog', () => {
    cy.window().then((win) => cy.stub(win, 'prompt').returns(null));
    cy.contains('button', 'Click for JS Prompt').click();
    cy.get('#result').should('have.text', 'You entered: null');
  });
});
