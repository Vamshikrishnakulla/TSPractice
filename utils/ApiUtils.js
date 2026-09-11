class ApiUtils {
  constructor(apiContext, loginPayLoad) {
    this.apiContext = apiContext;
    this.loginPayLoad = loginPayLoad;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      { data: this.loginPayLoad },
    );
    const loginResponseJson = await loginResponse.json();

    console.log(
      "Login Response:\n",
      JSON.stringify(loginResponseJson, null, 2),
    );
    return loginResponseJson.token;
  }

  async createOrder(orderPayload) {
    let response = {};
    response.token = await this.getToken();

    const orderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderPayload,
        headers: {
          authorization: response.token,
          "content-type": "application/json",
        },
      },
    );

    const orderResponseJson = await orderResponse.json();
    console.log(
      "Create Order Response:\n",
      JSON.stringify(orderResponseJson, null, 2),
    );
    response.productOrderID = orderResponseJson.productOrderId[0];
    response.orderID = orderResponseJson.orders[0];
    response.message = orderResponseJson.message;
    return response;
  }
}

module.exports = { ApiUtils };
