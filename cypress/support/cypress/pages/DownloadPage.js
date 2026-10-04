export default class DownloadPage {
  visit() {
    cy.visit('/download');
  }

  links() {
    return cy.get('.example a[href^="download/"]');
  }

  textFiles() {
    return this.links().filter('[href$=".txt"]');
  }
}
