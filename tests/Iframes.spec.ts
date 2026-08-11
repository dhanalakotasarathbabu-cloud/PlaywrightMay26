// iframes


import {test,expect} from '@playwright/test'


test("iframe the ", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/iframe");
    const close = page.locator('.tox-notification__dismiss');


    if (await close.isVisible()) {
        await close.click();
    }


    await page.locator("#mce_0_ifr").waitFor();


    const frame = page.frameLocator("#mce_0_ifr");
    const editor = frame.locator("#tinymce");
    await editor.waitFor();
    const text = await editor.textContent();


    console.log(text);


    await expect(editor).toContainText("Your content goes here.");


    await page.waitForTimeout(3000);
});


