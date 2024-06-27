///<reference types="cypress"/>



describe('To verify that hover functionality work perfectly', () => {

    it('Verify that hover functionality work perfectly', () => {
        cy.visit('https://the-internet.herokuapp.com/hovers');
        cy.get(':nth-child(3) > img').trigger('mouseover');
        cy.wait(10000);
        cy.get(':nth-child(3) > img').trigger('mouseout');




    });

});