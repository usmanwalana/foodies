import { browser, element, by } from 'protractor/globals';

export class FoodiesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fd-root h1')).getText();
  }
}
