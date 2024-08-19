import { test, expect } from '@playwright/test';



test('HeroCTA', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    //Key in Password   
        await page.getByRole('textbox').fill('top-secret');
    //Click Submit Button
        await page.getByRole('button').click();
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