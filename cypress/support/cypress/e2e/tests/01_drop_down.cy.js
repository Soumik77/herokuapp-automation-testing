import DropdownPage from '../../pages/DropdownPage';

const page = new DropdownPage();

describe('Dropdown selection', () => {
  beforeEach(() => page.visit());

  it('displays the disabled placeholder before a selection', () => {
    page.dropdown().should('be.visible');
    page.dropdown().find('option:selected')
      .should('be.disabled').and('have.text', 'Please select an option');
  });

  it('selects Option 1 and checks the stored value', () => {
    page.dropdown().select('1').should('have.value', '1');
    page.dropdown().find('option:selected').should('have.text', 'Option 1');
  });

  it('changes the selection to Option 2', () => {
    page.dropdown().select('1').select('2').should('have.value', '2');
    page.dropdown().find('option:selected').should('have.text', 'Option 2');
  });
});
