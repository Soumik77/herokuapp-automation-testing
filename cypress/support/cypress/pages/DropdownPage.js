export default class DropdownPage {
  visit() {
    cy.visit('/dropdown');
  }

  dropdown() {
    return cy.get('#dropdown');
  }
}
