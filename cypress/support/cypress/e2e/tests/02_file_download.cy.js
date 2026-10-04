import DownloadPage from '../../pages/DownloadPage';

const page = new DownloadPage();

describe('Download links and file retrieval', () => {
  beforeEach(() => page.visit());

  it('exposes downloadable links', () => {
    page.links().should('have.length.greaterThan', 0);
    page.links().first().should('be.visible');
  });

  it('retrieves a listed text file and preserves its downloaded bytes', () => {
    // The demo server's uploads change. Use a listed text file rather than
    // an old hardcoded image name. This checks HTTP retrieval, not browser UI.
    page.textFiles().should('have.length.greaterThan', 0).first()
      .invoke('attr', 'href').then((href) => {
        cy.request({ url: `/${href}`, encoding: 'binary', timeout: 30000 })
          .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.a('string');
            const destination = `${Cypress.config('downloadsFolder')}/downloaded-example.txt`;
            cy.writeFile(destination, response.body, 'binary');
            cy.readFile(destination, 'binary').should('equal', response.body);
          });
      });
  });
});
