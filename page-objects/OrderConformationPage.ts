import {Page, Locator} from '@playwright/test';

export class OrderConformationPage {
  page : Page;
  orderId : Locator;
  title : Locator;
  orders : Locator;
  tableRows : Locator;

  constructor(page : Page) {
    this.page = page;
    this.orderId = page.locator("label.ng-star-inserted");
    this.title = page.locator("h1.hero-primary");
    this.orders = page.locator("label[routerlink*='myorders']");
    this.tableRows = page.locator(".container .table tbody tr");
  }

  async clickOrders() {
    const orderId = await this.orderId.textContent();
    const conformationTitle = await this.title.textContent();
    await this.orders.click(); //navigating to orders page.
    return {orderId, conformationTitle};
  }

  async viewOrder(orderId : string) {
    //order history page
    await this.tableRows
      .filter({
        hasText: orderId.split(" | ")[1],
      })
      .locator("text=View")
      .click(); //order successfully viewed
  }
}
