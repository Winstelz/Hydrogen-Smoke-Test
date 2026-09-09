import { test, expect } from '@playwright/test';
import { Home } from '../src/pom/homePage';
import { LogIn } from '../src/pom/logIn';
import { PencilBanner } from '../src/pom/pencilBanner';


test('Click Navigation', async ({ page }) => {
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
//Click Mixed Menu Item
    await homePage.clickMixed();
//Click Yard Games
    await homePage.clickYardGames();
//Click Media Menu Item
    await homePage.clickMedia();
//Click Page Coming Soon
    await homePage.clickPageComingSoon();
//Click Grid Menu Item
    await homePage.clickGrid();
//Click Trainers
    await homePage.clickFirstTrainers();
//Click Direct Menu Item
    await homePage.clickDirect(); 
    
});