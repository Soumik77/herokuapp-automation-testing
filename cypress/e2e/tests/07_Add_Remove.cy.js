///<reference types="cypress"/>
describe('To verify that add and remove button work perfectly', () => {

    it('Verify that add button work perfectly', () => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
        cy.get('button').click();

    });
    it('Verify that second checkbox is working fine', () => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
        cy.get('.added-manually').click();
    });
});