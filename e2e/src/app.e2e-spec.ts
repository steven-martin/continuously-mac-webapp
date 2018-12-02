import { AppPage } from './app.po';

describe('The main Continuously main page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('Continuously Mac');
  });

  it('should display the correct Info header', () => {
    page.navigateTo();
    expect(page.getPageInfoHeader()).toEqual('CONTINOUSLY MAC');
  });

  it('should display at least one article', () => {
    page.navigateTo();
    expect(page.getArticles()).not.toBeNull();
  });

  it('should display the developer credit in the footer', () => {
    page.navigateTo();
    expect(page.getFooter()).toContain('Developed by');
    expect(page.getFooter()).toContain('StevenPaulMartin.uk');
  });
});
