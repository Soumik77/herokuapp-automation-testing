// These are the public demonstration credentials displayed on /login.
// They are not a personal account or a production secret.
Cypress.Commands.add('loginDemo', (username = 'tomsmith', password = 'SuperSecretPassword!') => {
  cy.visit('/login');
  cy.get('#username').clear();
  cy.get('#password').clear();
  if (username) cy.get('#username').type(username);
  if (password) cy.get('#password').type(password, { log: false });
  cy.get('#login button[type="submit"]').click();
});
