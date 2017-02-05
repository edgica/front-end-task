import { EdgicaAppPage } from './app.po';

describe('edgica-app App', function() {
  let page: EdgicaAppPage;

  beforeEach(() => {
    page = new EdgicaAppPage();
  });

  it(`should display message saying 'Search GitHub'`, () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Search GitHub');
  });
});
