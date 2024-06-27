///<reference types="cypress"/>

import '@4tw/cypress-drag-drop';

describe('To verify that drag and drop functionality work correctly', () => {

    it('Verify that add button work perfectly', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.get('#column-a').drag('#column-b');
        cy.wait(10000);
    });
    it('Verify that drag and drop functionality work correctly in reverse order', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.get('#column-b').drag('#column-a');
        cy.wait(10000);

    });
});