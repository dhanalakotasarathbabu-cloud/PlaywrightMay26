import {test, expect} from '@playwright/test'

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


