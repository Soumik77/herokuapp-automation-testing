///<reference types="cypress"/>


describe('To verify the login page is working fine', () => {

    it('Verify that user is able to login after valid username and password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.wait(3000);
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();

    });

    it('Verify that user is able to login after incorrect username and password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.wait(3000);
        cy.get('#username').type('tom');
        cy.get('#password').type('SuperSecret');
        cy.get('.radius').click();
    });
    it('Verify that user is able to login after valid username and password field empty space', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.wait(3000);
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('   ');
        cy.get('.radius').click();
    });



});