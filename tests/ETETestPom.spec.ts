import { test, expect } from "@playwright/test";
import { POManager } from "../page-objects/POManager";
import { orderDetails } from "../utils/placeOrderData.json";
// converting to java script objects using JSON.parse() and JSON.stringify() methods
const dataset = JSON.parse(JSON.stringify(orderDetails));
import { customTest } from "../utils/placeOrderCustomFixture";

// Running the tests in the file serial mode
//test.describe.configure({mode : 'serial'});

// Parametrization - getting data from Json file
for (const data of dataset) {
  test(`POM ETE Test Order placing for ${data.productName}`, async ({
    page,
  }) => {
    // page manager
    const objectManager = new POManager(page);

    // Login Page
    const loginPage = objectManager.getLoginPage();
    await loginPage.goTo(data.url);
    await loginPage.login(data.userName, data.userPassword);

    // Dashboard page
    const dashboardPage = objectManager.getDashboardPage();
    await dashboardPage.addProductToCart(data.productName);

    // Cart Page
    const cartPage = objectManager.getCartPage();
    await cartPage.productBuyNow(data.productName);

    // check-out Page
    const checkoutPage = objectManager.getCheckoutPage();
    const locators = await checkoutPage.fillCheckoutDetails(data.country);
    await expect(locators.textEmailField).toHaveText(
      await locators.inputEmailField.inputValue(),
    ); //check out page email validation
    await checkoutPage.clickSubmitButton();

    // Order Conformation page - Thank You Page
    const orderConformationPage = objectManager.getOrderConformationPage();
    const { orderId, conformationTitle } =
      await orderConformationPage.clickOrders();
    await orderConformationPage.viewOrder(orderId ?? "");
    console.log(
      `Order placed for user ${data.userName} in the country ${data.country} for the product 
${data.productName} and order ID is ${orderId} with title as "${conformationTitle}"`,
    );
    console.log("<<< [END] End of the Test Case.");
  });
}

customTest(
  "POM ETE Test Order placing ",
  async ({ page, testDataForOrder: data }) => {
    // Fixtures are best used for setting up page objects,
    // environments, or single-run states,
    // rather than passing arrays to be looped through inside the test - anti-pattern.

    // page manager
    const objectManager = new POManager(page);

    // Login Page
    const loginPage = objectManager.getLoginPage();
    await loginPage.goTo(data.url);
    await loginPage.login(data.userName, data.userPassword);

    // Dashboard page
    const dashboardPage = objectManager.getDashboardPage();
    await dashboardPage.addProductToCart(data.productName);

    // Cart Page
    const cartPage = objectManager.getCartPage();
    await cartPage.productBuyNow(data.productName);

    // check-out Page
    const checkoutPage = objectManager.getCheckoutPage();
    const locators = await checkoutPage.fillCheckoutDetails(data.country);
    await expect(locators.textEmailField).toHaveText(
      await locators.inputEmailField.inputValue(),
    ); //check out page email validation
    await checkoutPage.clickSubmitButton();

    // Order Conformation page - Thank You Page
    const orderConformationPage = objectManager.getOrderConformationPage();
    const { orderId, conformationTitle } =
      await orderConformationPage.clickOrders();
    await orderConformationPage.viewOrder(orderId ?? "");
    console.log(
      `Order placed for user ${data.userName} in the country ${data.country} for the product 
${data.productName} and order ID is ${orderId} with title as "${conformationTitle}"`,
    );
    console.log("<<< [END] End of the Test Case.");
  },
);
