import { browser, element, by } from 'protractor';

export class EdgicaAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
