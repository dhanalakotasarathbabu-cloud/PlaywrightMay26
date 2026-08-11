import {test,expect, chromium} from '@playwright/test'

//with out fixture

test("with out fixture", async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //Launch app url

    await page.goto("https://www.eenadu.net/");

    await page.waitForTimeout (3000);

});


// With browser fixture

test("with browser fixture", async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto ("https://www.eenadu.net/");

await page.waitForTimeout (3000);
});

// With context fixture

test(" with context fixture", async({context})=>{

    const page = await context.newPage();

    await page.goto ("https://www.eenadu.net/");
await page.waitForTimeout (3000);
});

// With Page fixture

test("with page fixture", async({page})=>{

      await page.goto ("https://www.eenadu.net/");
await page.waitForTimeout (3000);

});



// Print browser name

test ("print browser name", async({page, browserName})=> {
   
    console.log("Tests runing on", browserName);

    await page.goto ("https://www.billdesk.com/pgidsk/pgmerc/tsspdclpgi/TSSPDCLPGIDetails.jsp");

});

// Handling authentication pop ups using browser fixture.
test.only ("handle Authentication popups using browser fixture", async({browser})=>{

    const context = await browser.newContext({httpCredentials: {username: 'admin','password':'admin'}});
    const page = await context.newPage();

    await page.goto ("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);
});

// Handling authentication pop ups using page fixture.

test.only (" handling authentication pop ups using page fixture", async({page})=>{

await page.goto ("https://admin:admin@the-internet.herokuapp.com/basic_auth");

await page.waitForTimeout(3000);
});



// Dialog boxes zoom 

// Dialog Boxes:
test.only("Zoom url dialog handling", async({page})=>{
   
    page.on('dialog',async (dialog)=>{
        console.log("Dialog Message:", dialog.message());
        await dialog.accept();
    });


    await page.goto("https://us06web.zoom.us/s/82912015778");
    // page.on('dialog',async (dialog)=> await dialog.accept());


    await page.waitForTimeout(5000);


});



