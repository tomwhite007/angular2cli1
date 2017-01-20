import { CliDemoPrep1Page } from './app.po';

describe('cli-demo-prep1 App', function() {
  let page: CliDemoPrep1Page;

  beforeEach(() => {
    page = new CliDemoPrep1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
