import {test,expect} from '@playwright/test'

test("@light TCC_01 login", async({page})=>{

await page.goto ("https://www.airtelxstream.in/")

// Click on OTTS button
await page.getByRole('link', { name: 'OTTs OTTs' }).click();

});

test("TCC_02 myplans", {tag: '@important'}, async({page})=>{

await page.goto ("https://www.airtelxstream.in/")

// Click on Home button
await page.getByRole('link', { name: 'My Plans' }).click();

});

test("TCC_03 algi", {tag: ['@important','@light']}, async({page})=>{

await page.goto ("https://www.airtelxstream.in/")

// Click on Home button
await page.getByRole('link', { name: 'My Plans' }).click();

});