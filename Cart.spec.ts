import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/LogIn';



test('Cart', async ({ page }) => {

    const LogInPage = new LogIn(page)

    //Navigate to Hydrogen site   
        await LogInPage.gotoHomePage();
    //Key in Password   
        await LogInPage.EnterPassword();
    //Click Submit Button
        await LogInPage.ClickSubmit();
    //Verify Pencil Banner
        await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Navigate to PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/skinny-dip?Size=6');
        await page.waitForTimeout(2000);
    //Add to Bag
        const AddtoBag = await page.locator("//button[@class='br-add-to-cart__button br-button br-button--full-width br-button--has-text br-button--sm']");
        await AddtoBag.click();
        const Checkout = await page.locator("//a[normalize-space()='Continue to Checkout']");
        const CloseCart = page.locator("//*[name()='path' and contains(@d,'M12.0002 1')]");
        await CloseCart.click();
    //Navigate to Cart Page
        await page.goto("https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/cart");
    //Verify Product Title
        const ProdTitle = page.locator("//a[@class='br-product-line-item__title br-product-line-item__details-section']");
        expect(ProdTitle).toContainText("Skinny Dip");
    //Verify Size
        const ProdSize = page.locator("//span[@class='br-property__value']");
        expect(ProdSize).toContainText("6");
    //Increase QTY
        const QTYIncr = page.locator("(//span[@class='br-icon'])[13]");
        await QTYIncr.click();
        await QTYIncr.click();
        await page.waitForTimeout(2000);
    //Descrease QTY
        const QTYDecre = page.locator("(//span[@class='br-icon'])[12]");
        await QTYDecre.click();
        await QTYDecre.click();
        await page.waitForTimeout(2000);
    //Input QTY
        const QTY = page.locator("//input[@value='1']").nth(0);
        await QTY.fill("10");
        await page.waitForTimeout(2000); 
       



});