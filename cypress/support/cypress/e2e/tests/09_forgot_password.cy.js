describe('Password-recovery form', () => {
  beforeEach(() => cy.visit('/forgot_password'));

  it('displays an email field and a submit action', () => {
    cy.get('#email').should('be.visible').and('have.attr', 'name', 'email');
    cy.get('#form_submit').should('be.visible').and('have.attr', 'type', 'submit');
  });

  it('submits the email field to a stubbed service without sending email', () => {
    const demoEmail = 'qa-demo@example.test';
    // This test verifies the form request only. It does not test email delivery
    // or the demo server's password-recovery backend.
    cy.intercept('POST', '**/forgot_password', {
      statusCode: 200,
      headers: { 'content-type': 'text/html' },
      body: '<!doctype html><html><body><p id="demo-result">Demo request received</p></body></html>',
    }).as('recoveryRequest');
    cy.get('#email').type(demoEmail);
    cy.get('#form_submit').click();
    cy.wait('@recoveryRequest').then(({ request }) => {
      expect(new URLSearchParams(request.body).get('email')).to.equal(demoEmail);
    });
    cy.get('#demo-result').should('have.text', 'Demo request received');
  });
});
