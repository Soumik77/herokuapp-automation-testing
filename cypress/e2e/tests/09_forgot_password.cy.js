///<reference types="cypress"/>



describe('To verify that forget password work perfectly', () => {

    it('Verify that forget password work perfectly', () => {
        cy.visit('https://the-internet.herokuapp.com/forgot_password');
        cy.get('#email').type('soumikdattta229@gmail.com');
        cy.get('#form_submit').click();
    });

});