import { HacktheseaPage } from './app.po';

describe('hackthesea App', function() {
  let page: HacktheseaPage;

  beforeEach(() => {
    page = new HacktheseaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
