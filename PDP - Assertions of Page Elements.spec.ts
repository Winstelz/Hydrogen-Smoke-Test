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


    //Navigate to Second PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/fresh-picked');
    //Assert PDP Header
        await PDPHeader.textContent("Fresh Picked!");
    //Assert Variant Selection
        const VarSel4 = await page.locator("button[aria-label='Select Size: 24']");
        await VarSel4.click();
        expect(VarSel4).toHaveAttribute("aria-pressed","true");
         await page.waitForTimeout(2000);
    //Assert PDP Price
        expect(PDPPrice).toContainText("$49.00");
    //Assert PDP Description
        expect (PDPDesc).toContainText("The most-flavorful hard seltzer variety pack on the shelf. For sunny days, summer days, pool days, grillin’ days, and all kinds of Fundays, Mixtape offers flavor for any occasion. With only 100 calories, 2-3 grams of carbs, 0g of sugar, and 5% ABV per can, it’s time you enjoy the sweetness of summer, guilt-free. So whether you’re filling the cooler, mixing friend groups, or just looking for something different, Mixtape has a hard seltzer for everyone.");
    //Assert PDP Img
        expect(PDPImg).toHaveAttribute("src","https://cdn.shopify.com/s/files/1/0407/5002/2808/products/Group45.png?v=1717011355&width=1200");

    //Navigate to Third PDP
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/products/yard-games');
    //Assert PDP Header
        await PDPHeader.textContent("Yard Games");
    //Assert Variant Selection
        const VarSel = await page.locator("button[aria-label='Select Size: 6']");
        await VarSel.click();
        expect(VarSel).toHaveAttribute("aria-pressed","true");
        await page.waitForTimeout(2000);
    //Assert PDP Price
        expect(PDPPrice).toContainText("$16.99");
    //Assert PDP Description
        expect (PDPDesc).toContainText("The most-flavorful hard seltzer variety pack on the shelf. For sunny days, summer days, pool days, grillin’ days, and all kinds of Fundays, Mixtape offers flavor for any occasion. With only 100 calories, 2-3 grams of carbs, 0g of sugar, and 5% ABV per can, it’s time you enjoy the sweetness of summer, guilt-free. So whether you’re filling the cooler, mixing friend groups, or just looking for something different, Mixtape has a hard seltzer for everyone.");
    //Assert PDP Img
        expect(PDPImg).toHaveAttribute("src","https://cdn.shopify.com/s/files/1/0407/5002/2808/products/Group42.png?v=1683844056&width=1200");


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



    });