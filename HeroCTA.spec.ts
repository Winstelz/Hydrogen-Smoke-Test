import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/LogIn';



test('HeroCTA', async ({ page }) => {
    const LogInPage = new LogIn(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.EnterPassword();
    //Click Submit Button
        await LogInPage.ClickSubmit();
    //Verify Pencil Banner
    await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Click first CTA
       const CTA1 = await page.locator('text=Shop Now');
       await CTA1.click();
        expect(page.url()).toContain('pin-pack');

    // Click Logo to go back Home
        const Logo = await page.locator("//img[@alt='Bedrock']");
        await Logo.click();
        expect(page.url()).toContain('hydrogen');

    //Click on Hero CTA2
        const CTA2 = await page.locator('text=Learn More');
        await CTA2.click();
        expect(page.url()).toContain('trainers');

  });