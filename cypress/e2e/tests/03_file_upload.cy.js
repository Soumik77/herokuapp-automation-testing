///<reference types="cypress"/>


describe('Verify that file upload page is working fine', () => {

    it('Verify that user is able to upload file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').selectFile("S-67.jpg");
        cy.get('#file-submit').click();
    });


});