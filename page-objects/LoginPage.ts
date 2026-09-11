import {Page, Locator} from '@playwright/test';
export class LoginPage {
  page : Page;
  userName : Locator;
  userPassword : Locator;
  submit : Locator;

  constructor(page : Page) {
    this.page = page;
    this.userName = this.page.locator("#userEmail");
    this.userPassword = this.page.locator("#userPassword");
    this.submit = this.page.locator("#login");
  }

  async goTo(url: string) {
    await this.page.goto(url);
  }

  async login(userName : string, userPassword : string) {
    await this.userName.fill(userName);
    await this.userPassword.fill(userPassword);
    await this.submit.click();
    await this.page.waitForLoadState();
  }
}

