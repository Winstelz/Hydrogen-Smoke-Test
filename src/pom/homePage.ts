import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
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
    readonly pencilBanner: Locator;
    readonly bannerNextSlide: Locator;
    readonly bannerPreviousSlide: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly accountIcon: Locator;
    readonly cartIcon: Locator;
    readonly freshPickedFooter: Locator;
    readonly yardGamesFooter: Locator;
    readonly gardenPartyFooter: Locator;
    readonly skinnyDipFooter: Locator;
    readonly ourStory: Locator;
    readonly ingredientsFooter: Locator;
    readonly contactUs: Locator;
    readonly faq: Locator;
    readonly support: Locator;
    readonly shipping: Locator;
    readonly returns: Locator;
    readonly subscriptions: Locator

    constructor(page: Page) {
        this.page = page;
        this.password = page.getByRole('textbox');
        this.list = page.getByRole('button', { name: 'List' });
        this.freshPicked = page.getByRole('navigation').getByRole('link', { name: 'Fresh Picked' }).first();
        this.mixed = page.getByRole('button', { name: 'Mixed' });
        this.yardGames = page.getByRole('navigation').getByRole('link', { name: 'Yard Games' }).first();
        this.media = page.getByRole('button', { name: 'Media' });
        this.pageComingSoon = page.getByRole('link', { name: /Page coming soon/i });
        this.grid = page.getByRole('button', { name: 'Grid' });
        this.firstTrainers = page.getByRole('link', { name: 'Trainers' }).nth(1);
        this.direct = page.getByRole('link', { name: 'Direct' });
        this.logo = page.getByRole('img', { name: 'Bedrock' });
        this.pencilBanner = page.locator('.br-carousel__main').first();
        this.bannerNextSlide = page.locator('.br-carousel__main').getByRole('button', { name: 'Go to next slide' });
        this.bannerPreviousSlide = page.locator('.br-carousel__main').getByRole('button', { name: 'Go to previous slide' });
        this.searchIcon = page.getByRole('button', { name: /Open Search Bar/i });
        this.searchInput = page.getByRole('searchbox', { name: /Start a search/i });
        this.accountIcon = page.getByRole('link', { name: /Log In/i });
        this.cartIcon = page.getByRole('button', { name: /Cart/i }).first();
        this.freshPickedFooter = page.locator('footer').getByRole('link', { name: 'Fresh Picked' });
        this.yardGamesFooter = page.locator('footer').getByRole('link', { name: 'Yard Games' });
        this.gardenPartyFooter = page.locator('footer').getByRole('link', { name: 'Garden Party' });
        this.skinnyDipFooter = page.locator('footer').getByRole('link', { name: 'Skinny Dip' });
        this.ourStory = page.locator('footer').getByRole('link', { name: 'Our Story' });
        this.ingredientsFooter = page.locator('footer').getByRole('link', { name: 'Ingredients' });
        this.contactUs = page.locator('footer').getByRole('link', { name: 'Contact Us' });
        this.faq = page.locator('footer').getByRole('link', { name: 'FAQ' });
        this.support = page.locator('footer').getByRole('link', { name: 'Support' });
        this.shipping = page.locator('footer').getByRole('link', { name: 'Shipping' });
        this.returns = page.locator('footer').getByRole('link', { name: 'Returns' });
        this.subscriptions = page.locator('footer').getByRole('link', { name: 'Subscriptions' });
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
        await this.page.waitForTimeout(5000);
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

    async clickBanner (container: Locator) {
        console.log({message: `Clicking Banner Arrows...`});
        const activeSlide = container.locator('.swiper-slide-active');
        // Grab the active slide's index before clicking
        const getActiveIndex = async () => {
        return Number(await activeSlide.getAttribute('data-swiper-slide-index'));
  };

        const index1 = await getActiveIndex();

        await this.bannerNextSlide.click();
        await this.page.waitForTimeout(2000);
        const index2 = await getActiveIndex();
        expect(index2).not.toBe(index1); // confirms it moved forward

        await this.bannerNextSlide.click();
        await this.page.waitForTimeout(2000);
        const index3 = await getActiveIndex();
        expect(index3).not.toBe(index2);

        await this.bannerPreviousSlide.click();
        await this.page.waitForTimeout(2000);
        const index4 = await getActiveIndex();
        expect(index4).toBe(index2); // back to slide 2

        await this.bannerPreviousSlide.click();
        await this.page.waitForTimeout(2000);
        const index5 = await getActiveIndex();
        expect(index5).toBe(index1); // back to start

        await this.bannerNextSlide.click();
        await this.page.waitForTimeout(2000);
}

async clickSearchIcon() {
    console.log({ message: `Clicking Search Icon....`});
    await this.searchIcon.click();
    await this.page.waitForLoadState(`domcontentloaded`);

}

async searchForItem(item: string) {
    console.log({ message: `Searching for item: ${item}....`});
    await this.searchInput.fill(item);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('load');
    await this.page.waitForTimeout(5000);
    expect(this.page.url()).toContain(`/search?q=${item}`);

    }

async clickAccountIcon() {
    console.log({ message: `Clicking Account Icon....`});
    await this.accountIcon.click();
    await this.page.waitForTimeout(5000);
    expect(this.page.url()).toContain(`/shopify.com/authentication/`);
    await this.page.goBack();
    await this.page.waitForTimeout(2000);

}

async clickCartIcon() {
    console.log({ message: `Clicking Cart Icon....`});
    await this.cartIcon.click();
    await this.page.waitForTimeout(10000);

}

async clickFreshPickedFooter() {
    console.log({ message: 'Clicking Fresh Picked Footer...' });
    await this.freshPickedFooter.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/products/fresh-picked?Size=6');
    }

async clickYardGamesFooter() {
    console.log({ message: 'Clicking Yard Games Footer...' });
    await this.yardGamesFooter.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/products/yard-games?Size=6');
    }

async clickGardenPartyFooter() {
    console.log({ message: 'Clicking Garden Party Footer...' });
    await this.gardenPartyFooter.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/products/garden-party?Size=6');
    }

async clickSkinnyDipFooter() {
    console.log({ message: 'Clicking Skinny Dip Footer...' });
    await this.skinnyDipFooter.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/products/skinny-dip?Size=6');
    }

async clickOurStoryFooter() {
    console.log({ message: 'Clicking Our Story Footer...' });
    await this.ourStory.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/our-story');
    }

async clickIngredientsFooter() {
    console.log({ message: 'Clicking Ingredients Footer...' });
    await this.ingredientsFooter.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/ingredients');
    }

async clickContactUsFooter() {
    console.log({ message: 'Clicking Contact Us Footer...' });
    await this.contactUs.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/contact-us');
    }

async clickFaqFooter() {
    console.log({ message: 'Clicking FAQ Footer...' });
    await this.faq.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/faq');
    }

async clickSupportFooter() {
    console.log({ message: 'Clicking Support Footer...' });
    await this.support.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/support');
    }

async clickShippingFooter() {
    console.log({ message: 'Clicking Shipping Footer...' });
    await this.shipping.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/shipping');
    }

async clickReturnsFooter() {
    console.log({ message: 'Clicking Returns Footer...' });
    await this.returns.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/returns');
    }

async clickSubscriptionFooter() {
    console.log({ message: 'Clicking Subscriptions Footer...' });
    await this.subscriptions.click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.url()).toContain('/subscription');
    }
}
