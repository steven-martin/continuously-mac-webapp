import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getPageInfoHeader() {
    return element(by.css('app-root h1')).getText();
  }

  getArticles() {
    return element(
      by.css('app-root app-page div.board app-articles div.articles')
    ).getText();
  }

  getFooter() {
    return element(by.css('app-root app-footer p')).getText();
  }
}
