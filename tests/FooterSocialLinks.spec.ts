import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/LogIn';

test('FooterSocialLinks', async ({ page }) => {
    const LogInPage = new LogIn(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.EnterPassword();
    //Click Submit Button
        await LogInPage.ClickSubmit();
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