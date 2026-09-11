import {Page, Locator} from '@playwright/test';

export class CheckoutPage {
  page : Page;
  textEmailField : Locator;
  inputEmailField : Locator;
  countryField : Locator;
  dropDownList : Locator;
  submitButton : Locator;

  constructor(page : Page) {
    this.page = page;
    this.textEmailField = page.locator(".user__name label[type='text']");
    this.inputEmailField = page.locator(".user__name input[type='text']");
    this.countryField = page.locator("[placeholder='Select Country']");
    this.dropDownList = page.locator(".ta-results");
    this.submitButton = page.locator(".btnn.action__submit");
  }

  async fillCheckoutDetails(country : string) {
    const searchValue = country.substring(7, country.length - 1);
    await this.countryField.pressSequentially(searchValue, { delay: 100 });
    await this.dropDownList
      .getByRole("button", { name: new RegExp(`${country}$`, "i") })
      .click();
    return {
      textEmailField: this.textEmailField,
      inputEmailField: this.inputEmailField,
    };
  }

  async clickSubmitButton() {
    await this.submitButton.click(); // order placed
  }
  
}

