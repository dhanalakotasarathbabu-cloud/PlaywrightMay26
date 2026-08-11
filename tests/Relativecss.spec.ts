
// Relative CSS
import {test, expect} from "@playwright/test"

test ("tricentis sample app", async ({page}) => {

    await page.goto ("https://sampleapp.tricentis.com/101/");

    await page.waitForTimeout(5000);

// click on automobile  (Tag with ID # )

await page.locator('a#nav_automobile').first().click();

// enter the date field value Tag with class name .

await page.locator ('input.datepicker.hasDatepicker').first().fill ('06/26/2026');

// enter the list price with tag with any attribute [attribute]

await page.locator('input[name="List Price"]').fill("1234");

// Click on next button Tag with class and attribute Tag.class[attribute]

await page.locator ('button.next.button[type="button"]').click();

await page.waitForTimeout (5000);
})