import { expect, Locator, Page } from '@playwright/test';

export class Home {
    readonly page: Page;
    readonly password: Locator;
    readonly list: Locator;
    readonly freshPicked: Locator;
    readonly learn: Locator;
    readonly pageComing: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.password =  page.getByRole('textbox');
        this.list = page.getByRole('button', { name: 'List' });
        this.freshPicked = page.getByRole('navigation').getByRole('link', { name: 'Fresh Picked' });
        this.learn = page.getByRole('button', { name: 'Learn' });
        this.pageComing = page.locator("//a[normalize-space()='Page coming soon']");


    }

    async gotoHomePage() {
        console.log({ message:'Navigating to the home page...' });
        await this.page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    }
    

    async clickList () {
        console.log({ message:'Clicking List button...' });
        await this.list.click();
        await this.page.waitForTimeout(2000);
    }
    async clickFreshPicked () {
        console.log({ message:'Clicking Fresh Picked link...' });
        await this.freshPicked.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toContain('/products/fresh-picked?Size=6');
    }
    async clickMixed () {
        console.log({ message:'Clicking Mixed button...' });
        await this.learn.click();
        await this.page.waitForTimeout(2000);
    }
    async clickYardGames () {
        console.log({ message:'Clicking Yard Games...' });
        await this.pageComing.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toContain("/products/yard-games?Size=6");
    }


}