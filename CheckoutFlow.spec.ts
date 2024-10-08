import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/LogIn';



test('Checkout Flow', async ({ page }) => {
    const LogInPage = new LogIn(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.EnterPassword();
    //Click Submit Button
        await LogInPage.ClickSubmit();
    //Verify Pencil Banner
        await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Navigate to PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/skinny-dip?Size=6');
        await page.waitForTimeout(2000);
    //Add to Bag
        const AddtoBag = await page.locator("//button[normalize-space()='Add to Bag']");
        await AddtoBag.click();
        const Checkout = await page.locator("//a[normalize-space()='Continue to Checkout']");
    //Click Checkout
        await Checkout.click();
        expect(page.url()).toContain("api-cache-sandbox");

});
