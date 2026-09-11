import { test as base } from "@playwright/test";
import { ApiUtils } from "./ApiUtils.js";

const loginPayload = {
  userEmail: "yanku@gmail.com",
  userPassword: "Yanku@nair1",
};

const orderPayload = {
  orders: [
    { country: "Denmark", productOrderedId: "6960eac0c941646b7a8b3e68" },
  ],
};

// Playwright exports test (which has the .extend() method)
export const customtest = base.extend({
  // Custom Fixture 1: Pre-authenticated Page
  authenticatedPage: async ({ context }, use) => {
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill(loginPayload.userEmail);
    await page.locator("#userPassword").fill(loginPayload.userPassword);
    await page.locator("#login").click();

    // Ensure the dashboard is fully loaded before handing page over to test
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body").first().waitFor({ state: "visible" });

    // Hand over control to the test
    await use(page);

    // (Optional) Cleanup logic after the test finishes can go here
    await context.close();
  },

  // Custom Fixture 2: Dynamic API Order Creation
  createOrder: async ({ request }, use) => {
    const apiUtils = new ApiUtils(request, loginPayload);
    const orderData = await apiUtils.createOrder(orderPayload);

    // Pass the response object (e.g., { orderId, token }) to the test
    await use(orderData);
  },

  productDetails: {
    productName: "ADDIDAS ORIGINALS",
  }
});
