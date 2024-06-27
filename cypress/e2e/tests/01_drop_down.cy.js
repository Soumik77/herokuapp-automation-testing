///<reference types="cypress"/>

import dropdown from "../pages/drop_down.cy";

const drop_down = new dropdown();

describe('To verify dropdown page is working fine', () => {

    it('Verify that dropdown should be present on the page', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        drop_down.dropdown.should('exist'); //dropdown exist
    });

    it('Verify that user is able to select from dropdown', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        drop_down.dropdown.should('exist'); //dropdown exist
        drop_down.dropdown.select(2);
    });
});