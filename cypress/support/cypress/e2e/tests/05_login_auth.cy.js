describe('Login validation', () => {
  it('logs in with the published demo credentials and logs out', () => {
    cy.loginDemo();
    cy.location('pathname').should('equal', '/secure');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('a[href="/logout"]').click();
    cy.location('pathname').should('equal', '/login');
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });

  it('rejects an invalid username', () => {
    cy.loginDemo('invalid-demo-user', 'invalid-demo-password');
    cy.location('pathname').should('equal', '/login');
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('rejects an incorrect password for the demo user', () => {
    cy.loginDemo('tomsmith', 'invalid-demo-password');
    cy.location('pathname').should('equal', '/login');
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('rejects an empty username', () => {
    cy.loginDemo('', 'invalid-demo-password');
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('rejects an empty password', () => {
    cy.loginDemo('tomsmith', '');
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});
