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


test('Search', async ({ homePage }) => {
//Click Search Icon
    await homePage.clickSearchIcon();
//Type Search Term 1
    await homePage.searchForItemAndWaitForResults("shoe");
//Assert Category
    await homePage.checkForError500();
/*Seems site errors now if waiting for results. 
  Leaving this here in case it gets fixed in the future.
//Click Search Icon
    await page.waitForLoadState();
    await Search.click();
//Type Search Term 1
    await SearchBar.fill("shoe");
    await page.waitForTimeout(2000);
//Click 1st Product Card
    const ProdCard = await page.locator("//body/div[@id='layout']/div[contains(@class,'header-container')]/div[contains(@class,'br-sticky sticky-header')]/div[contains(@class,'z-overlay')]/div[contains(@class,'w-full bg-body absolute search-overlay search-overlay--has-results')]/div[contains(@class,'flex flex-col flex-auto items-center justify-center py-4 md:py-3 px-4 md:px-6')]/div[contains(@class,'w-full')]/section[contains(@class,'mb-20 md:mb-0')]/div[contains(@class,'max-width--large')]/div[contains(@class,'br-row row br-row--fake-gap w-full py-10')]/div[contains(@class,'br-col')]/div[contains(@class,'br-grid w-full')]/div[1]/div[1]/div[1]");
    await ProdCard.click();
    await page.waitForTimeout(2000);
    expect(page.url()).toContain("/products/black-white-slide-womens");
//Click Search Icon
    await page.waitForLoadState();
    await Search.click();
//Type Search Term 1
    await SearchBar.fill("shoe");
    await page.waitForTimeout(2000);
//Click See All Results Button
    const SeeAll = await page.locator("//button[normalize-space()='See All Results']");
    await SeeAll.click();
    await page.waitForTimeout(2000);
    expect(page.url()).toContain("/search?q=shoe");
//Search on Search Result Page
    const SearchResIcon = await page.locator("//input[@id='q']");
    await SearchResIcon.fill("men")
    await page.waitForTimeout(2000);
    */



});