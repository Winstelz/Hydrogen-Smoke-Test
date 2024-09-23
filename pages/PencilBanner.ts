import { expect, type Locator, type Page } from '@playwright/test';

export class PencilBanner {
    readonly page: Page;
    readonly PencilBanner: Locator;
    readonly RightArrow: Locator;
    readonly LeftArrow: Locator;

    constructor(page) {
        this.page = page;
        this.PencilBanner = page.locator('.br-carousel__main');
        this.RightArrow = page.locator("//button[@class='br-carousel__navigation-cta br-carousel__navigation-cta--next br-icon-button br-icon-button--xs br-icon-button--circle br-button br-button--has-icon br-button--ghost br-button--icon-trailing']//span[@class='br-icon']//*[name()='svg']");
        this.LeftArrow = page.locator("//button[@class='br-carousel__navigation-cta br-carousel__navigation-cta--prev br-icon-button br-icon-button--xs br-icon-button--circle br-button br-button--has-icon br-button--ghost br-button--icon-trailing']");
    }

    async ClickPencilBanner () {
        await this.PencilBanner.isVisible();
        await this.RightArrow.click();
        await this.LeftArrow.click();

    }
}