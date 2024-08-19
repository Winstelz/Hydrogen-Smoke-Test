import { test, expect } from '@playwright/test';
import { ChildProcess } from 'child_process';



test('ShopLook_PDP_Checkout', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://hydrogen-remix-bedrock-6724052a8d6843c567a3.o2.myshopify.dev/');
    //Key in Password   
        await page.getByRole('textbox').fill('top-secret');
    //Click Submit Button
        await page.getByRole('button').click();
    //Verify Pencil Banner
    await expect(page.locator('.br-carousel__main')).toBeVisible();

    //Click first Shop the Look
       const FirstBtn = await page.locator("(//button[@type='button'])[23]");
       await FirstBtn.click();
       const FirstImg =  await page.locator("text=Fresh Picked!").nth(1);
        await FirstImg.click();
       const PDPheader = await page.locator("h1[class='br-title br-title--h4']");
       await PDPheader.textContent("Fresh Picked!");

    //Verify url is correct
      expect(page.url()).toContain('fresh-picked');

    //Click a variant/size
        const Firstsize = page.locator("text=12");
        await Firstsize.click();

    //Click Add to Bag
        const AddtoBag = page.locator("text=Add to Bag");
        await AddtoBag.click();

    //Look for Checkout Button in Inline Cart
        await page.locator("text=Checkout");

    //Verify QTN in Cart
        const QTN = page.locator("//span[@class='br-property__value'][normalize-space()='12']");
        expect(QTN.textContent('12'));

    //Close Inline Cart
        const CloseCart = page.locator("button[aria-label='close'] span[class='br-icon']");
        await CloseCart.click();

      // Click Logo to go back Home
      const Logo = await page.locator("//img[@alt='Bedrock']");
      await Logo.click();
      expect(page.url()).toContain('hydrogen');
      await page.waitForTimeout(2000);




    //Click Second Shop the Look
      const SecondBtn = await page.locator("(//button[@type='button'])[24]");
      await SecondBtn.click();
      const SecondImg =  await page.locator("text=Garden Party").nth(1);
       await SecondImg.click();
      const PDPheader2 = await page.locator("h1[class='br-title br-title--h4']");
      await PDPheader2.textContent("Garden Party");

    //Verify url is correct
     expect(page.url()).toContain('garden-party');

     //Click a variant/size
     const Secondsize = page.locator("text=6").nth(1);
     await Secondsize.click();

    //Click Add to Bag
     await AddtoBag.click();

     //Look for Checkout Button in Inline Cart
     await page.locator("text=Checkout");

     //Verify QTN in Cart
     const QTN2 = page.locator("//span[@class='br-property__value'][normalize-space()='6']");
     expect(QTN2.textContent('6'));

     //Close Inline Cart
     await CloseCart.click();

     // Click Logo to go back Home
     await Logo.click();
     expect(page.url()).toContain('hydrogen');
     await page.waitForTimeout(2000);



     //Click Third Shop the Look
     const ThirdBtn = await page.locator("(//button[@type='button'])[25]");
     await ThirdBtn.click();
     const ThirdImg =  await page.locator("text=Skinny Dip").nth(1);
      await ThirdImg.click();
     const PDPheader3 = await page.locator("h1[class='br-title br-title--h4']");
     await PDPheader3.textContent("Skinny Dip");

    //Verify url is correct
    expect(page.url()).toContain('skinny-dip');

    //Click a variant/size
    const Thirdsize = page.locator("text=24").nth(0);
    await Thirdsize.click();

    //Click Add to Bag
    await AddtoBag.click();

    //Look for Checkout Button in Inline Cart
    await page.locator("text=Checkout");

    //Verify QTN in Cart
    const QTN3 = page.locator("//span[@class='br-property__value'][normalize-space()='24']");
    expect(QTN3.textContent('24'));

    //Close Inline Cart
    await CloseCart.click();

    // Click Logo to go back Home
    await Logo.click();
    expect(page.url()).toContain('hydrogen');
    await page.waitForTimeout(2000);



     //Click Fourth Shop the Look
     const FourthBtn = await page.locator("(//button[@type='button'])[26]");
     await FourthBtn.click();
     const FourthImg =  await page.locator("text=Yard Games").nth(1);
        await FourthImg.click();
     const PDPheader4 = await page.locator("h1[class='br-title br-title--h4']");
     await PDPheader4.textContent("Yard Games");

    //Verify url is correct
    expect(page.url()).toContain('yard-games');

    //Click a variant/size;
    await Firstsize.click();

   //Click Add to Bag
    await AddtoBag.click();

    //Look for Checkout Button in Inline Cart
    await page.locator("text=Checkout");

    //Verify QTN in Cart
    const QTN4 = page.locator("(//span[contains(text(),'12')])[3]");
    expect(QTN4.textContent('12'));

    //Close Inline Cart
    await CloseCart.click();

    // Click Logo to go back Home
    await Logo.click();
    expect(page.url()).toContain('hydrogen');
    await page.waitForTimeout(2000);


    //Click Fifth Shop the Look
    const FifthBtn = await page.locator("(//button[@type='button'])[27]");
    await FifthBtn.click();
    const FifthImg =  await page.locator("text=Variety Pack").nth(2);
       await FifthImg.click();
    const PDPheader5 = await page.locator("h1[class='br-title br-title--h4']");
    await PDPheader5.textContent("Variety Pack");

   //Verify url is correct
   expect(page.url()).toContain('variety-pack');

   //Click a variant/size;
   await Secondsize.click();

  //Click Add to Bag
   await AddtoBag.click();

   //Look for Checkout Button in Inline Cart
   await page.locator("text=Checkout");

   //Verify QTN in Cart
   const QTN5 = page.locator("(//span[contains(text(),'6')])[4]");
   expect(QTN5.textContent('6'));

   //Close Inline Cart
   await CloseCart.click();

   // Click Logo to go back Home
   await Logo.click();
   expect(page.url()).toContain('hydrogen');


});