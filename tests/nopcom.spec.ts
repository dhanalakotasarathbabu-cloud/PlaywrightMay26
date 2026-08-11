import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  //Click on register link
  await page.getByRole('link', { name: 'Register' }).click();

  //Fill in details
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
 // await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('parasuram');
  //await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('dhana');
  //await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('parasudhana1@gmail.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('dhana@123');
  //await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('dhana@123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('link', { name: 'parasudhana1@gmail.com' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.waitForTimeout(2000);
});