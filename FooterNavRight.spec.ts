import { test, expect } from '@playwright/test';



test('FooterNavRight', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    //Key in Password   
        await page.getByRole('textbox').fill('top-secret');
    //Click Submit Button
        await page.getByRole('button').click();
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