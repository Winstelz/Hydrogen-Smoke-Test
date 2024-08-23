import { test, expect } from '@playwright/test';
import { execPath } from 'process';



test('Search', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    //Key in Password   
        await page.getByRole('textbox').fill('top-secret');
    //Click Submit Button
        await page.getByRole('button').click();
    //Verify Pencil Banner
        await expect(page.locator('.br-carousel__main')).toBeVisible();
//Click Search Icon
    await page.waitForLoadState();
    const Search = page.locator("//button[@aria-label='Open Search Bar']//span[@class='br-icon']//*[name()='svg']//*[name()='path' and contains(@d,'M15.5 14h-')]");
    await Search.click();
//Type Search Term 1
    const SearchBar = page.locator("//input[@id='q']");
    await SearchBar.fill("shoe");
    await page.waitForTimeout(2000);
//Verify Category
    const Catg = await page.getByText("Shop By Flavor");
    await Catg.click();
    await page.waitForTimeout(2000);
    expect(page.url()).toContain("shop-by-flavor");
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



});