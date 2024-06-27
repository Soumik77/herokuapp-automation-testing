///<reference types="cypress"/>


export default class file_download {
    text() {
        return cy.get('[href="download/selenide-intro.txt"]');

    }
    picture() {
        return cy.get('[href="download/B679B151-5948-41DE-80E3-D172E9446D10.png"]');
    }
}