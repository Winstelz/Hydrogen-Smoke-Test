import { test, expect } from '@playwright/test';



test('PDP - Assertions of Page Elements', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    //Key in Password   
        await page.getByRole('textbox').fill('top-secret');
    //Click Submit Button
        await page.getByRole('button').click();
    //Verify Pencil Banner
        await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Navigate to First PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/skinny-dip');
    //Assert PDP Header
        const PDPHeader = await page.locator("h1[class='br-title br-title--h4']");
        await PDPHeader.textContent("Skinny Dip");
    //Assert Variant Selection
        const VarSel2 = await page.locator("button[aria-label='Select Size: 12']");
        await VarSel2.click();
        expect(VarSel2).toHaveAttribute("aria-pressed","true");
        await page.waitForTimeout(2000);
    //Assert PDP Price
        const PDPPrice = await page.locator("//span[@class='br-price__regular']");
        expect(PDPPrice).toContainText("$32.99");
    //Assert PDP Description
        const PDPDesc = await page.locator("//span[contains(text(),'The most-flavorful hard seltzer variety pack on th')]");
        expect (PDPDesc).toContainText("The most-flavorful hard seltzer variety pack on the shelf. For sunny days, summer days, pool days, grillin’ days, and all kinds of Fundays, Mixtape offers flavor for any occasion. With only 100 calories, 2-3 grams of carbs, 0g of sugar, and 5% ABV per can, it’s time you enjoy the sweetness of summer, guilt-free. So whether you’re filling the cooler, mixing friend groups, or just looking for something different, Mixtape has a hard seltzer for everyone.");
    //Assert PDP Img
        const PDPImg = await page.locator("//img[@loading='eager']");
        expect(PDPImg).toHaveAttribute("src","https://cdn.shopify.com/s/files/1/0407/5002/2808/products/Group44.png?v=1683844013&width=1200" );
    //Click QTY Increase
        const QTYIncr = page.locator("//button[@class='br-quantity-selector__button br-quantity-selector__button--plus br-icon-button br-icon-button--circle br-button br-button--has-icon br-button--ghost br-button--icon-trailing']");
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click();
    //Click QTY Decrease
        const QTYDecre = page.locator("//button[@class='br-quantity-selector__button br-quantity-selector__button--minus br-icon-button br-icon-button--circle br-button br-button--has-icon br-button--ghost br-button--icon-trailing']");
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();
     //Input QTY
        const QTY = page.locator("//input[@value='1']");
        await QTY.fill("10");
    //Add to Bag
        const AddtoBag = page.locator("//button[normalize-space()='Add to Bag']");
        await AddtoBag.click();
        const CloseCart = page.locator("//*[name()='path' and contains(@d,'M12.0002 1')]");
        await CloseCart.click();

    //Navigate to Second PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/fresh-picked');
        await page.waitForLoadState();
        //Assert PDP Header
        await PDPHeader.textContent("Fresh Picked!");
    //Assert Variant Selection
        const VarSel4 = await page.locator("button[aria-label='Select Size: 24']");
        await VarSel4.click();
        expect(VarSel4).toHaveAttribute("aria-pressed","true");
        await page.waitForTimeout(3000);
    //Assert PDP Price
        expect(PDPPrice).toContainText("$49.00");
    //Assert PDP Description
        expect (PDPDesc).toContainText("The most-flavorful hard seltzer variety pack on the shelf. For sunny days, summer days, pool days, grillin’ days, and all kinds of Fundays, Mixtape offers flavor for any occasion. With only 100 calories, 2-3 grams of carbs, 0g of sugar, and 5% ABV per can, it’s time you enjoy the sweetness of summer, guilt-free. So whether you’re filling the cooler, mixing friend groups, or just looking for something different, Mixtape has a hard seltzer for everyone.");
    //Assert PDP Img
        expect(PDPImg).toHaveAttribute("src","https://cdn.shopify.com/s/files/1/0407/5002/2808/products/Group45.png?v=1717011355&width=1200");
//Click QTY Increase
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click();
//Click QTY Decrease
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();
//Input QTY
    await QTY.click();
    await QTY.fill("10");
//Add to Bag
        await AddtoBag.click();
        await CloseCart.click();

    //Navigate to Third PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/yard-games');
    //Assert PDP Header
        await PDPHeader.textContent("Yard Games");
    //Assert Variant Selection
        const VarSel = await page.locator("button[aria-label='Select Size: 6']");
        await VarSel.click();
        expect(VarSel).toHaveAttribute("aria-pressed","true");
        await page.waitForLoadState();
    //Assert PDP Price
        expect(PDPPrice).toContainText("$16.99");
    //Assert PDP Description
        expect (PDPDesc).toContainText("The most-flavorful hard seltzer variety pack on the shelf. For sunny days, summer days, pool days, grillin’ days, and all kinds of Fundays, Mixtape offers flavor for any occasion. With only 100 calories, 2-3 grams of carbs, 0g of sugar, and 5% ABV per can, it’s time you enjoy the sweetness of summer, guilt-free. So whether you’re filling the cooler, mixing friend groups, or just looking for something different, Mixtape has a hard seltzer for everyone.");
    //Assert PDP Img
        expect(PDPImg).toHaveAttribute("src","https://cdn.shopify.com/s/files/1/0407/5002/2808/products/Group42.png?v=1683844056&width=1200");
    //Click QTY Increase
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click(); 
    //Click QTY Decrease
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();
    //Input QTY
        await QTY.click();
        await QTY.fill("10");
    //Add to Bag
        await AddtoBag.click();
        await CloseCart.click();


    //Navigate to Fourth PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/garden-party');
    //Assert PDP Header
        await PDPHeader.textContent("Garden Party");
    //Assert Variant Selection
        await VarSel2.click();
        expect(VarSel2).toHaveAttribute("aria-pressed","true");
        await page.waitForTimeout(2000);
    //Assert PDP Price
        expect(PDPPrice).toContainText("$32.99");
    //Assert PDP Description
        expect (PDPDesc).toContainText("The most-flavorful hard seltzer variety pack on the shelf. For sunny days, summer days, pool days, grillin’ days, and all kinds of Fundays, Mixtape offers flavor for any occasion. With only 100 calories, 2-3 grams of carbs, 0g of sugar, and 5% ABV per can, it’s time you enjoy the sweetness of summer, guilt-free. So whether you’re filling the cooler, mixing friend groups, or just looking for something different, Mixtape has a hard seltzer for everyone.");
    //Assert PDP Img
        expect(PDPImg).toHaveAttribute("src","https://cdn.shopify.com/s/files/1/0407/5002/2808/products/Group43.png?v=1683844035&width=1200");
    //Click QTY Increase
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click();
        await QTYIncr.click();
    //Click QTY Decrease
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();
        await QTYDecre.click();

    //Input QTY
        await QTY.click();
        await QTY.fill("10");
    //Add to Bag
        await AddtoBag.click();
        await CloseCart.click();   


    });