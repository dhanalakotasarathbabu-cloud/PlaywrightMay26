import { test, expect } from '@playwright/test';

test('check the checkboxes', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');


  await page.getByRole('checkbox').first().check();

  await page.getByRole('checkbox').nth(1).check();

  await page.waitForTimeout (2000);

});


test("test 2 check boxes", async({page})=>{

    await page.goto ("https://www.ironspider.ca/forms/checkradio.htm");

    await page.getByRole('checkbox').first().check();
    await page.getByRole('checkbox').nth(1).check();
    await page.getByRole('checkbox').nth(2).check();
    await page.getByRole('checkbox').nth(3).check();
     await page.getByRole('checkbox').nth(4).check();
    await page.getByRole('checkbox').nth(5).check();
});



test("test3 check boxes using for loop", async({page})=> {

     await page.goto ("https://www.ironspider.ca/forms/checkradio.htm");

     const checkboxcount = await page.getByRole('checkbox').count();

     console.log ("number of check boxes", checkboxcount);

     //select all the check boxes using for loop

     for(let i=0; i<checkboxcount;i++) {
        
        await page.getByRole('checkbox').nth(i).check();

     }

});
