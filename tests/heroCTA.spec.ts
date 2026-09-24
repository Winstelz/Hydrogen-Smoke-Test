import { test as base, expect } from '@playwright/test';
import { LogIn } from '../src/pom/logIn';
import { HomePage } from '../src/pom/homePage';

type PageObjects = {
  homePage: HomePage;
  login: LogIn;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
    login: async ({ page }, use) => {
    await use(new LogIn(page));
  },

});

test.beforeEach(async ({ login }) => {
    await login.logIn();
});


test('Hero CTA', async ({ homePage }) => {
//Click first CTA
    await homePage.clickStartBrowsing();
// Click Logo to go back Home
    await homePage.clickLogo();
//Click on Hero CTA2
    await homePage.clickFindHelp();

  });