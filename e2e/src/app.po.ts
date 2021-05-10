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
      by.css('app-root app-page div.page app-articles div.article-details')
    ).getText();
  }

  getFooter() {
    return element(by.css('app-root app-footer p')).getText();
  }
}
