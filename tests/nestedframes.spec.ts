import {test, expect} from '@playwright/test'

test("nested frames", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/nested_frames");

    



})