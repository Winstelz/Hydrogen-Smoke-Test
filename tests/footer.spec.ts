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

test('Footer Navigation Right', async ({ homePage }) => {
    //Click Fresh Picked
        await homePage.clickFreshPickedFooter();
    //Click Yard Games
        await homePage.clickYardGamesFooter();
    //Click Garden Party
        await homePage.clickGardenPartyFooter();
    //Click Skinny Dip
        await homePage.clickSkinnyDipFooter();
    //Click Our Story
        await homePage.clickOurStoryFooter();
    //Click Ingredients
        await homePage.clickIngredientsFooter();
    //Click Contact Us
        await homePage.clickContactUsFooter();
    //Click FAQ
        await homePage.clickFaqFooter();
    //Click Shipping
        await homePage.clickShippingFooter();
    //Click Returns
        await homePage.clickReturnsFooter();
    //Click Subscriptions
        await homePage.clickSubscriptionFooter();
    });
    
test('Footer Social Links', async ({ homePage }) => {
    /*TO DO look into clicking X and going back to run rest of social link test
    //Click X Social Links
        await homePage.clickXFooter();*/
    //Click Facebook Social Links
        await homePage.clickFacebookFooter();
    //Click Spotify Social Links
        await homePage.clickSpotifyFooter();
    //Click Pinterest Social Links
        await homePage.clickPinterestFooter();
    //Click Instagram Social Links
       await homePage.clickInstagramFooter();
    //Click YouTube Social Links
        await homePage.clickYouTubeFooter();
    //Click TikTok Social Links
        await homePage.clickTikTokFooter();

    });