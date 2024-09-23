import { test, expect } from '@playwright/test';
import { Home } from '../pages/HomePage';
import { LogIn } from '../pages/LogIn';
import { PencilBanner } from '../pages/PencilBanner';


test('Navigation', async ({ page }) => {
    const LogInPage = new LogIn(page)
    const HomePage = new Home(page)
    const Banner = new PencilBanner(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.EnterPassword();
    //Click Submit Button
        await LogInPage.ClickSubmit();
    //Verify Pencil Banner
        await Banner.ClickPencilBanner();

    //Click Shop Menu Item
        await HomePage.ClickShop();
    //Click Fresh Picked
        await HomePage.ClickFreshPicked();
        
    
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