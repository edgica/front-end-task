import { FrontEndTaskPage } from './app.po';

describe('front-end-task App', () => {
  let page: FrontEndTaskPage;

  beforeEach(() => {
    page = new FrontEndTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('GitHub Javascript projects');
  });
});
