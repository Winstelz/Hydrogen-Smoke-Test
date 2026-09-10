import { test as base, expect } from '@playwright/test';
import { HomePage } from '../src/pom/homePage';
import { LogIn } from '../src/pom/logIn';
import { PencilBanner } from '../src/pom/pencilBanner';

type PageObjects = {
  homePage: HomePage;
  login: LogIn;
  pencilBanner: PencilBanner;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
    login: async ({ page }, use) => {
    await use(new LogIn(page));
  },
    pencilBanner: async ({ page }, use) => {
    await use(new PencilBanner(page));
  },
});

test.beforeEach(async ({ login }) => {
//Navigate to Hydrogen site   
    await login.gotoHomePage();
//Log In to Hydrogen site
    await login.logIn();
});

test('Click Navigation', async ({ homePage, pencilBanner }) => {
//Assert Pencil Banner
    await pencilBanner.clickPencilBanner();
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
//Click Logo
    await homePage.clickLogo();  
});

test('AnnoucementBar Flow', async ({ homePage }) => {
//Click through the Annoucement Bar
    await homePage.clickBanner(homePage.pencilBanner);
});

test('Click Search Icon', async ({ homePage }) => {
// Click Search Icon, type search, and submit
    await homePage.clickSearchIcon();
    await homePage.searchForItem('fundays');
});

test('Click Account Icon', async ({ homePage }) => {
// Click Account Icon and wait for the auth flow to start
    await homePage.clickAccountIcon();
});

test('Click Cart Icon', async ({  homePage }) => {
// Click Inline Cart
    await homePage.clickCartIcon();
});