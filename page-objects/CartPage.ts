import { Locator, Page } from "@playwright/test";

export class CartPage{
    
    page : Page;
    cartItem : Locator;

    constructor(page : Page){
        this.page = page;
        this.cartItem = page.locator("div.cart ul");
    }

    async productBuyNow(productName : string){
        const item = this.cartItem.filter({hasText: productName});
        await item.locator(".removeWrap .btn-primary").click();
    }

    
}
