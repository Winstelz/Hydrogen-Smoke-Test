import { expect, type Locator, type Page } from '@playwright/test';

export class PDP {
    readonly page: Page;
    readonly size12: Locator;
    readonly addToBagButton: Locator;


    constructor(page: any) {
        this.page = page;
        this.size12 = page.getByRole('button', { name: /Select Size: 12/i});
        this.addToBagButton = page.getByRole('button', { name: /Add to Bag/i});

    }

async selectSize(size: Locator) {
    console.log({ message: `Selecting Size...`});
    await expect(size).toBeVisible();
    await size.click();
}

async clickAddToBagButton() {
    console.log({ message: `Clicking Add to Bag...`});
    await expect(this.addToBagButton).toBeVisible();
    await this.addToBagButton.click();
}
}
