import {test, expect} from '@playwright/test'

test("Valid login", async({page})=> {

    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Enter valid username and password.
await page.getByPlaceholder ('Username').fill('Admin');
await page.getByPlaceholder ('Password').fill('ádmin123');
  await page.waitForTimeout(5000);
// Click on Login button

 await page.getByRole('button',{name:'Login'}).click();
    await page.waitForTimeout(10000);

})