import {test,expect} from '@playwright/test'

test.describe("Smoke test", async()=>{

    test ("01 Open  amazon url", async ({page})=>{

        await page.goto("https://www.amazon.com/");

    });

    test ("02 Open Flipkart", async({page})=>{

        await page.goto("https://www.flipkart.com/");


    });


    test ("04 Open Meesho", async({page})=>{

        await page.goto ("https://www.meesho.com/");


    });

    test ("05 Open blinkit", async({page})=>{

        await page.goto ("https://blinkit.com/?srsltid=AfmBOopcyIK8bFyN9QMEmbULhT_j0qONZLhWMusaT_OljFSd3TpPRCoV");
    });


});

test("TC01 Orange HRM login", async ({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Verify login screen 
    page.getByRole( 'heading', {name:'Login'});
    await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();

    // Enter username and password

    await page.getByPlaceholder ('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');


    // Clisk on Login button

    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForTimeout(5000);

});