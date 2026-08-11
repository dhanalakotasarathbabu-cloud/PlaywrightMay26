import {test,expect} from "@playwright/test"

test("Open demo web shop", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.waitForTimeout (3000);


    // click on demo web shop logo
    // page.get by alt text this is maily seen on images and logos where the html code contains and alt attribute. 

    await page.getByAltText ("Tricentis Demo Web Shop").click();

    await page.waitForTimeout(3000);

    // page.getbytext
    const news = page.getByText('Newsletter');
     await expect(news).first().click();
       await page.waitForTimeout(3000);
})