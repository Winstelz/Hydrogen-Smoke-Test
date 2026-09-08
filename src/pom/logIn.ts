import { expect, type Locator, type Page } from '@playwright/test';

export class LogIn {
    readonly page: Page;
    readonly password: Locator;
    readonly submit: Locator;

    constructor(page: any) {
        this.page = page;
        this.password =  page.getByRole('textbox')
        this.submit = page.getByRole('button')

    }

    async gotoHomePage() {
        await this.page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    }
    
    async enterPassword(password?: string) {
        const pw = password ?? process.env.PASSWORD;
        if (!pw) throw new Error('PASSWORD not set (pass as arg or set process.env.PASSWORD)');
        console.log({ message: 'Entering password...' });
        await this.password.fill(pw);
    }

    async clickSubmit () {
        console.log({ message:'Clicking submit button...' });
        await this.submit.click();
    }

    async logIn(password?: string) {
        await this.gotoHomePage();
        await this.enterPassword(password);
        await this.clickSubmit();
    }



}