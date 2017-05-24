import { N3kModulesPage } from './app.po';

describe('n3k-modules App', () => {
  let page: N3kModulesPage;

  beforeEach(() => {
    page = new N3kModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
