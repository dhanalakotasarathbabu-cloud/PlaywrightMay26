import {test, expect} from "@playwright/test"

//Opening demo web shop url

test ("demoweb shop", async({page})=> {

    await page.goto("https://demowebshop.tricentis.com/");

    await page.waitForTimeout(5000);

})

// opening tricentis api site 

test("tricentis insurance application", async({page})=> {

    await page.goto ("https://webservice.toscacloud.com/");
    await page.waitForTimeout(3000);

})

    //opening amazon website.

    test("opening amazon website", async({page})=> {
        await page.goto ("https://www.amazon.com/");
        await page.waitForTimeout(4000);

    })


    // opening https://obstaclecourse.tricentis.com/Obstacles/60469/retry

    test ("opening obstacle", async({page})=>{
 await page.goto ("https://obstaclecourse.tricentis.com/Obstacles/60469/retry");
 await page.waitForTimeout(5000)
    })

    //Opening nop commerce application

    test ("opening nop commerce website", async({page})=>{
        await page.goto("https://www.nopcommerce.com/en?srsltid=AfmBOorFaw8uyxO_4HfNvcGtltHH1OwllIFMm2_5AMpCB3BFJA_Fobk0");
        await page.waitForTimeout(5000);
    })