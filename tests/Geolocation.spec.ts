import {test,expect} from "@playwright/test"

test('geolocation_1', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/geolocation');
  await expect(page.getByRole('button', { name: 'Where am I?' })).toBeVisible();
  await page.getByRole('button', { name: 'Where am I?' }).click();
  await expect(page.getByText('17.432647183059014')).toBeVisible();
  await expect(page.getByText('78.42619175308292')).toBeVisible();
  await page.getByRole('link', { name: 'See it on Google' }).click();
});