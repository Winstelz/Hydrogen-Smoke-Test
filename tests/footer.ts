import { test as base, expect } from '@playwright/test';
import { LogIn } from '../src/pom/logIn';
import { HomePage } from '../src/pom/homePage';

type PageObjects = {
  homePage: HomePage;
  login: LogIn;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
    login: async ({ page }, use) => {
    await use(new LogIn(page));
  },

});



test.skip('Footer Navigation Right', async ({ page }) => {
    const LogInPage = new LogIn(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.enterPassword();
    //Click Submit Button
        await LogInPage.clickSubmit();
    //Verify Pencil Banner
        await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Click Fresh Picked
        const FP = await page.locator("//a[normalize-space()='Fresh Picked']");
        await FP.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('fresh-picked');
    //Click Yard Games
        const YG = await page.locator("//a[normalize-space()='Yard Games']");
        await YG.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('yard-games');
    //Click Garden Party
        const GP = await page.locator("//a[normalize-space()='Garden Party']");
        await GP.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('garden-party');
    //Click Skinny Dip
        const SD = await page.locator("//a[normalize-space()='Skinny Dip']");
        await SD.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('skinny-dip');
    //Click Shipping
        const Shipping = await page.locator("//a[normalize-space()='Shipping']");
        await Shipping.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('shipping-policy');
    //Click Returns
        const Returns = await page.locator("//a[normalize-space()='Returns']");
        await Returns.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('refund-policy');
    //Click Subscriptions
        const Sub = await page.locator("//a[normalize-space()='Subscriptions']");
        await Sub.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('subscription-policy');
    //Click Our Story
        const OS = await page.locator("//a[normalize-space()='Our Story']");
        await OS.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('hydrogen-remix');
    //Click Ingredients
        const Ingredients = await page.locator("//a[normalize-space()='Ingredients']");
        await Ingredients.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('hydrogen-remix');
    //Click Contact Us
        const CU = await page.locator("//a[normalize-space()='Contact Us']");
        await CU.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('hydrogen-remix');
    //Click FAQ
        const FAQ = await page.locator("//a[normalize-space()='FAQ']");
        await FAQ.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('faq');
    //Click Privacy Policy
        const PP = await page.locator("//a[normalize-space()='Privacy Policy']");
        await PP.click();
        //await page.waitForTimeout(5000);
       // expect(page.url()).toContain('privacy-policy');
    //Click Terms of Services
       // const TOS = page.locator("//a[normalize-space()='Terms of Service']");
        //await TOS.click();
        //await page.waitForTimeout(5000);
        //expect(page.url()).toContain('terms-of-service');
    });
test.skip('Footer Social Links', async ({ page }) => {
    const LogInPage = new LogIn(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.enterPassword();
    //Click Submit Button
        await LogInPage.clickSubmit();
    //Verify Pencil Banner
        await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Click X Social Links
        const Twitter = await page.locator("a[href='https://twitter.com/thestable']");
        await Twitter.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('thestable');
    //Click Facebook Social Links
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
        const Facebook = await page.locator("//*[name()='path' and contains(@d,'M13.8869 2')]");
        await Facebook.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('thestablegroup');
    //Click Spotify Social Links
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
        const Spotify = await page.locator("//a[3]//span[1]//*[name()='svg']");
        await Spotify.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('track');
    //Click Pinterest Social Links
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
        const Pinterest = await page.locator("//*[name()='path' and contains(@d,'M11.9951 0')]");
        await Pinterest.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('pinterest');
    //Click Instagram Social Links
       await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
       const Instagram = await page.locator("//*[name()='path' and contains(@d,'M12.1347 6')]");
       await Instagram.click();
       await page.waitForTimeout(2000);
       expect(page.url()).toContain('instagram');
    //Click YouTube Social Links
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
        const YouTube = await page.locator("//*[name()='path' and contains(@d,'M23.4982 5')]");
        await YouTube.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('youtube');
    //Click TikTok Social Links
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
        const TikTok = await page.locator("//*[name()='path' and contains(@d,'M22.5758 6')]");
        await TikTok.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('faq');

    });