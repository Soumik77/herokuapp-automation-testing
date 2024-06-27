///<reference types="cypress"/>
describe('To verify the checkbox is working fine', () => {

    it('Verify that first checkbox is working fine', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('#checkboxes > :nth-child(1)').click();
    });
    it('Verify that second checkbox is working fine', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('[checked=""]').click();
    });
});