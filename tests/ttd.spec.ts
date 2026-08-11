import {test, expect} from '@playwright/test'

test("ttd website", async({page})=>{

    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  //verify the login screen

  page.getByRole('heading', {name:'Login'});
  await expect (page.getByRole('heading', {name:'Login'})).toBeVisible();

  // enter username and password

  await page.getByPlaceholder ('Username').fill('Admin');
  await page.getByPlaceholder ('Password').fill('admin123')

  //Click on login button

 await page.getByRole('button',{name:'Login'}).click();
  
  await page.waitForTimeout(5000);



})