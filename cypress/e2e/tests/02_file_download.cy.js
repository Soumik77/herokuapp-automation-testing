///<reference types="cypress"/>
import file_download from "../pages/filedownload.cy";
const file = new file_download();
describe('To verify the test cases of download page', () => {
    it('To verify user is able to download file ', () => {
        //go to the website
        cy.wait(10000);
        file.picture().click();
    });
    it('To verify the downloadable link should be present', () => {
        cy.wait(30000);
        file.text().should('exist');
    });
});