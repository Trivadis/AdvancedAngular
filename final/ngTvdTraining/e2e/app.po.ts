import { browser, by, element } from 'protractor';
import * as fs from 'fs';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getText(selector: string) {
    return this.getElement(selector).getText();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  search(search: string) {
    this.getElement('input[type="search"]').clear();
    this.getElement('input[type="search"]').sendKeys(search);
  }

  getResult() {
    return element.all(by.css('table.table tbody tr'));
  }

  takeScreenshot(idx: number) {
    return browser.takeScreenshot().then(png => {
      const stream = fs.createWriteStream('screenshot-' + idx + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }

  getLastname(idx: number) {
    return element(by.css('table.table tbody tr td:nth-child(3)')).getText();
  }

  acceptAlert() {
    browser
      .switchTo()
      .alert()
      .accept();
  }
}
