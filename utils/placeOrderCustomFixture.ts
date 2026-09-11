import {test as base } from '@playwright/test';

export const customTest = base.extend<{
    testDataForOrder : {
        userName : string,
        userPassword : string,
        productName : string,
        country : string,
        url : string
    }
}>({
    testDataForOrder :
        {
    userName: "yanku@gmail.com",
    userPassword: "Yanku@nair1",
    productName: "ZARA COAT 3",
    country: "India",
    url: "https://rahulshettyacademy.com/client"
}, 

});


