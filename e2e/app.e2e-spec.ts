import { StefanimpressedPage } from './app.po';

describe('stefanimpressed App', () => {
  let page: StefanimpressedPage;

  beforeEach(() => {
    page = new StefanimpressedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
