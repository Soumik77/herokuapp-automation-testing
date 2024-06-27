///<reference types="cypress"/>


describe('Verify that the java script alert is working properly', () => {

    it('Verify that Click for Js Alert working perfectly', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(1) > button').click();

    });
    it('Verify that Click for Js Confirm working perfectly', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', (w) => {
            expect(w).to.equal('I am a JS Confirm');
        })
    });
    it('Verify that Click for Js prompt working perfectly', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(3) > button').click();

    });


});