import {test,expect} from '@playwright/test'

test ("upload files", async({page})=>{
    

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.waitForTimeout(3000);

    // click on choose file 

    await page.locator('input#file-upload').setInputFiles('files/aadhaaar.pdf');

    // Click on upload

    await page.locator('input#file-submit').click();

    await page.waitForTimeout (3000);

})

test ("upload excel files", async({page})=>{
    

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.waitForTimeout(3000);

    // click on choose file 

    await page.locator('input#file-upload').setInputFiles('files/Tosca_revision11222.xlsx');

    // Click on upload

    await page.locator('input#file-submit').click();

    await page.waitForTimeout (3000);

})

// Upload multiple files. 

test(" upload multlple files", async({page})=> {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.waitForTimeout(3000);

     // click on choose file 

     //await page.locator('input#file-upload').setInputFiles(['files/aadhaaar.pdf','files/Tosca_revision11222.xlsx']);
          await page.locator('input#file-upload').setInputFiles('files/aadhaaar.pdf');
          await page.locator('input#file-upload').setInputFiles('files/Tosca_revision11222.xlsx');

     await page.waitForTimeout(3000);

     // Click on upload files

     await page.locator('input#file-submit').click();

     await page.waitForTimeout (3000);


})


test("download files", async({page})=>{


    await page.goto ("https://the-internet.herokuapp.com/download");

    // single file download

    const [dwnl] = await Promise.all([page.waitForEvent('download'),
        await page.locator('text=sample NDA doc.pdf').click()
    ]);

    console.log(dwnl);
    console.log(await dwnl.suggestedFilename());
  await page.waitForTimeout(3000);

});