import { expect, type Locator, type Page, type getbyRole } from '@playwright/test';

export class Home {
    readonly page: Page;
    readonly Password: Locator;
    readonly Submit: Locator;
    readonly Shop: getbyRole;
    readonly FreshPicked: Locator;
    

    constructor(page) {
        this.page = page;
        this.Password =  page.getByRole('textbox')
        this.Submit = page.getByRole('button')
        this.Shop = page.getByRole('button', { name: 'Shop' })
        this.FreshPicked = page.getByRole('navigation').getByRole('link', { name: 'Fresh Picked' })

    }

    async gotoHomePage() {
        await this.page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    }
    
    async EnterPassword () {
        await this.Password.fill('top-secret');
    }

    async ClickSubmit () {
        await this.Submit.click();
    }
    async ClickShop () {
        await this.Shop.click();
        await this.page.waitForTimeout(2000);
    }
    async ClickFreshPicked () {
        await this.FreshPicked.click();
        await this.page.waitForTimeout(2000);
        expect(this.page.url()).toContain('/products/fresh-picked?Size=6');
    }



}