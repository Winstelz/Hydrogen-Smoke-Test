import { expect, Locator, Page } from '@playwright/test';

export class Home {
    readonly page: Page;
    readonly password: Locator;
    readonly list: Locator;
    readonly freshPicked: Locator;
    readonly mixed: Locator;
    readonly yardGames: Locator;
    readonly media: Locator;
    readonly pageComingSoon: Locator;
    readonly grid: Locator;
    readonly firstTrainers: Locator;
    readonly direct: Locator;
    readonly logo: Locator;
    readonly learn: Locator;
    readonly pageComing: Locator;

    constructor(page: Page) {
        this.page = page;
        this.password = page.getByRole('textbox');
        this.list = page.getByRole('button', { name: 'List' });
        this.freshPicked = page.getByRole('navigation').getByRole('link', { name: 'Fresh Picked' });
        this.mixed = page.getByRole('button', { name: 'Mixed' });
        this.yardGames = page.getByRole('link', { name: 'Yard Games' });
        this.media = page.getByRole('link', { name: 'Media' });
        this.pageComingSoon = page.getByRole('link', { name: 'Page coming soon' });
        this.grid = page.getByRole('link', { name: 'Grid' });
        this.firstTrainers = page.getByRole('link', { name: 'Trainers' }).nth(1);
        this.direct = page.getByRole('link', { name: 'Direct' });
        this.logo = page.getByRole('img', { name: 'Bedrock' });
        this.learn = page.getByRole('button', { name: 'Learn' });
        this.pageComing = page.locator("//a[normalize-space()='Page coming soon']");
    }

    async gotoHomePage() {
        console.log({ message: 'Navigating to the home page...' });
        await this.page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    }

    async clickList() {
        console.log({ message: 'Clicking List button...' });
        await this.list.click();
        await this.page.waitForTimeout(2000);
    }

    async clickFreshPicked() {
        console.log({ message: 'Clicking Fresh Picked link...' });
        await this.freshPicked.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toContain('/products/fresh-picked?Size=6');
    }

    async clickMixed() {
        console.log({ message: 'Clicking Mixed button...' });
        await this.mixed.click();
        await this.page.waitForTimeout(2000);
    }

    async clickYardGames() {
        console.log({ message: 'Clicking Yard Games...' });
        await this.yardGames.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toContain('/products/yard-games?Size=6');
    }

    async clickMedia() {
        console.log({ message: 'Clicking Media link...' });
        await this.media.click();
        await this.page.waitForTimeout(2000);
    }

    async clickPageComingSoon() {
        console.log({ message: 'Clicking Page Coming Soon link...' });
        await this.pageComingSoon.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toContain('/products/fresh-picked?Size=6');
    }

    async clickGrid() {
        console.log({ message: 'Clicking Grid link...' });
        await this.grid.click();
        await this.page.waitForTimeout(2000);
    }

    async clickFirstTrainers() {
        console.log({ message: 'Clicking First Trainers link...' });
        await this.firstTrainers.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toContain('/collections/trainers');
    }

    async clickDirect() {
        console.log({ message: 'Clicking Direct link...' });
        await this.direct.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toContain('/collections/trainers');
    }

    async clickLogo() {
        console.log({ message: 'Clicking Logo...' });
        await this.logo.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.url()).toBe('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    }
}
