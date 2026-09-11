import {Page, Locator} from '@playwright/test';

export class DashboardPage {

  page : Page;
  cartButton : Locator;
  cards : Locator;

  constructor(page : Page) {
    this.page = page;
    this.cartButton = page.locator("[routerlink*='cart']");
    this.cards = page.locator("div.card .card-body");
  }

  async addProductToCart(productName : string) {
    const addToCartItem : Locator = this.cards.filter({
      hasText: productName,
    });
    await addToCartItem.locator("text=' Add To Cart'").click(); //add to cart complete
    await this.cartButton.click(); //navigated to cart page.
    await this.page.waitForLoadState();
  }
}
