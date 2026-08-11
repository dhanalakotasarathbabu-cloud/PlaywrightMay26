import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.billdesk.com/pgidsk/pgmerc/tsspdclpgi/TSSPDCLPGIDetails.jsp');
  await expect(page.getByRole('cell', { name: 'Postpaid Service', exact: true })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Unique Service Number:', exact: true })).toBeVisible();
  await page.getByRole('textbox').click();

 
  await page.getByRole('textbox').fill('115467044');
  await page.getByRole('button', { name: 'Make Payment' }).click();
  await expect(page.locator('input[name="txtAdditionalInfo2"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(3000);
  await page.goto('https://www.billdesk.com/pgidsk/ProcessPayment?wpage=a0F1XuDDWtK4dS9ClAizDiPV');
  await page.waitForTimeout(3000);
});