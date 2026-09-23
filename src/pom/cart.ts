import { expect, type Locator, type Page } from '@playwright/test';

export class Cart {
    readonly page: Page;
    readonly inlineCartQty: Locator;
    readonly inlineCartClose: Locator;
    readonly continueCheckoutButton: Locator;
    


    constructor(page: any) {
        this.page = page;
        this.inlineCartQty = page.locator("//span[@class='br-property__value']");
        this.inlineCartClose = page.getByRole('button', { name: /close/i});
        this.continueCheckoutButton = page.getByRole('button', { name: /Continue to Checkout/i});
    }

    async assertContinueCheckoutButton() {
        console.log({ message: `Assert on Inline Cart Page...`});
        await expect(this.continueCheckoutButton).toBeVisible();
    }

    async assertQtyInlineCart(qty: string) {
        console.log({ message: `Assert on Inline Cart Quantity...`});   
        await expect(this.inlineCartQty).toHaveText(qty);
    }

    async clickContinueCheckoutButton() {
        console.log({ message: `Clicking Continue to Checkout...`});
        await expect(this.continueCheckoutButton).toBeVisible();
        await this.continueCheckoutButton.click();
        await expect(this.page.url()).toContain(`api-cache-sandbox`);
    }
}