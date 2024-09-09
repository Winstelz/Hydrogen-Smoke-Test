import { expect, type Locator, type Page } from '@playwright/test';

export class LogIn {
    readonly page: Page;
    readonly Password: Locator;
    readonly Submit: Locator;

    constructor(page) {
        this.page = page;
        this.Password =  page.getByRole('textbox')
        this.Submit = page.getByRole('button')

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



}