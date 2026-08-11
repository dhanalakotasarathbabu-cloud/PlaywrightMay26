import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.billdesk.com/pgidsk/pgmerc/tsspdclpgi/TSSPDCLPGIDetails.jsp');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('115467044');
  await page.getByRole('button', { name: 'Make Payment' }).click();
  await page.getByRole('link', { name: 'try again' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('115467044');
    await page.getByRole('button', { name: 'Make Payment' }).click();
});