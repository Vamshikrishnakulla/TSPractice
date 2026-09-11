import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { OrderConformationPage } from "./OrderConformationPage";
import { Page } from "@playwright/test";

export class POManager {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  orderConformationPage: OrderConformationPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.orderConformationPage = new OrderConformationPage(page);
  }

  getLoginPage(): LoginPage {
    return this.loginPage;
  }

  getDashboardPage(): DashboardPage {
    return this.dashboardPage;
  }

  getCartPage(): CartPage {
    return this.cartPage;
  }

  getCheckoutPage(): CheckoutPage {
    return this.checkoutPage;
  }

  getOrderConformationPage(): OrderConformationPage {
    return this.orderConformationPage;
  }
}
