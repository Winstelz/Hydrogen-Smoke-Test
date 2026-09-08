import { test, expect } from '@playwright/test';
import { Home } from '../src/pom/homePage';
import { LogIn } from '../src/pom/logIn';
import { PencilBanner } from '../src/pom/pencilBanner';


test('Navigation', async ({ page }) => {
    const logInPage = new LogIn(page)
    const homePage = new Home(page)
    const banner = new PencilBanner(page)

//Navigate to Hydrogen site   
    await logInPage.gotoHomePage();
//Log In to Hydrogen site
    await logInPage.logIn();
//Assert Pencil Banner
    await banner.clickPencilBanner();
//Click List Menu Item
    await homePage.clickList();
//Click Fresh Picked
    await homePage.clickFreshPicked();
        
    /*Need to work on and update
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
        */
    });