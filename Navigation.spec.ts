import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/LogIn';


test('Navigation', async ({ page }) => {
    const LogInPage = new LogIn(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.EnterPassword();
    //Click Submit Button
        await LogInPage.ClickSubmit();
    //Verify Pencil Banner
        await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Click Shop Menu Item
        await page.waitForLoadState();
        const shopButton = await page.getByRole('button', { name: 'Shop' });
        await shopButton.click();
        await page.waitForTimeout(2000);
    //Click Fresh Picked
        const FreshPicked = await page.getByRole('navigation').getByRole('link', { name: 'Fresh Picked' })
        await FreshPicked.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('/products/fresh-picked?Size=6');
    
    //Click Learn Menu Item 
        const Learn = await page.getByRole('button', { name: 'Learn' });
        await Learn.click();
        await page.waitForTimeout(2000);
        const ImgFP = page.getByRole('banner').getByRole('link', { name: 'Fresh Picked' });
        await ImgFP.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("/products/fresh-picked?Size=6");   


    //Click Grid Menu Item  
        await page.waitForLoadState();
        const Grids = await page.getByRole('button', { name: 'Grid' })
        await Grids.click();
        await page.waitForTimeout(2000);
        const GridFP = page.locator("div:nth-child(5) > .br-content-tile > .br-component-anchor-overlay");
        await GridFP.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("/products/fresh-picked?Size=6");


    //Click Trainers Menu Item
        const Trainers = await page.locator("//a[normalize-space()='Trainers']")
        await Trainers.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("/collections/trainers");
        
    });