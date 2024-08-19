import { test, expect } from '@playwright/test';



test('PLP', async ({ page }) => {
    //Navigate to Hydrogen site    
    await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    //Key in Password   
        await page.getByRole('textbox').fill('top-secret');
    //Click Submit Button
        await page.getByRole('button').click();
    //Verify Pencil Banner
    await expect(page.locator('.br-carousel__main')).toBeVisible();
//Navigate to PLP
    await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/collections/trainers');  
//Verify url is correct
    expect(page.url()).toContain('trainers');
//Assert the first item on PLP
    const FirstItem = page.locator("//div[@class='br-grid']//div[1]//div[1]//div[2]//a[1]");
    await FirstItem.textContent("AQUA TRAINER");
//Click Page 3
    await page.locator("(//a[normalize-space()='3'])[1]").click();
    await expect(page.url()).toContain("page=3");
//Assert the first item on PLP PG3
    const SecondItem = page.locator("//div[@class='br-grid']//div[1]//div[1]//div[2]//a[1]");
    await SecondItem.textContent("Black Coffee Canvas Mid Trainer");
//Click Variant Icon
    const VarIcon = page.locator("//button[@aria-label='BLACK COFFEE']");
    await VarIcon.click();
//Click Image to go to PDP
    const FirstImg = page.locator("//body[1]/div[1]/section[2]/div[1]/section[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/a[1]/div[1]/img[1]");
    await FirstImg.click();
    await page.waitForTimeout(2000);
//Verify Variant is Selected on PDP
    const PDPVar = page.locator("//button[@aria-label='Select Color: BLACK COFFEE']");
    expect(PDPVar).toHaveAttribute("aria-pressed","true");

});