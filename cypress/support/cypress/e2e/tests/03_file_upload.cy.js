describe('File upload', () => {
  it('uploads a synthetic text fixture and confirms its filename', () => {
    cy.visit('/upload');
    cy.get('#file-upload').selectFile('cypress/fixtures/upload-sample.txt');
    cy.get('#file-submit').click();
    cy.get('h3').should('have.text', 'File Uploaded!');
    cy.get('#uploaded-files').should('contain.text', 'upload-sample.txt');
  });
});
