import { AppPage } from './app.po';

describe('employee-portal App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title correctly', () => {
    page.navigateTo('/');
    expect(page.getText('app-root h2')).toEqual('Employee Portal');
  });

  it('should navigate to employee page', () => {
    page.navigateTo('/');

    page.getElement('[ng-reflect-router-link="/employees"]').click();

    expect(page.getCurrentUrl()).toContain('/employees');
  });

  it('should search correct', () => {
    page.navigateTo('/employees');

    page.search('Thomas');

    expect(page.getResult().count()).toEqual(3);
  });

  it('should edit a person correctly', () => {
    page.navigateTo('/employees');
    page.takeScreenshot(1);

    page.getElement('table a.btn.btn-ok').click();
    page.takeScreenshot(2);

    const inputField = page.getElement('[formcontrolname="lastname"]');
    inputField.clear();
    page.takeScreenshot(3);

    inputField.sendKeys('Wayne');
    page.takeScreenshot(4);

    const email = page.getElement('[formcontrolname="email"]').getAttribute('value');
    page.getElement('[formcontrolname="emailConfirm"]').sendKeys(email);
    page.takeScreenshot(5);

    page.getElement('button.btn.btn-ok').click();
    // page.acceptAlert();
    page.takeScreenshot(6);

    expect(page.getLastname(0)).toEqual('Wayne');
  });
});
