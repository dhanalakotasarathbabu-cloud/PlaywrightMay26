import {test, expect} from '@playwright/test'

test ("demo web shop", async({page})=> {

    await page.goto("https://demowebshop.tricentis.com/")

    await page.waitForTimeout(5000);



    



})

