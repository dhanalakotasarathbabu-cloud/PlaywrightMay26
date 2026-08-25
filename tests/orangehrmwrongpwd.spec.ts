import {test,expect} from '@playwright/test'

test("orange hrm wrong pwd", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();

    //Enter username and password

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('wrong123');

    //Click on login button 

    await page.getByRole('button',{name:'Login'}).click();

    //verify the error message

    await expect(page.getByText('Invalid credentials')).toBeVisible();

})

/*
test("orange hrm wrong username", async({page})=>{

    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();

    //Enter username and password

    await  page.getByPlaceholder('Username').fill('sarath');
    await page.getByPlaceholder('Password').fill('admin123');

        //Click on login button 

    await page.getByRole('button',{name:' Login '}).click();

    //Verify the error message


await expect(page.getByText('Invalid credentials')).toBeVisible();
})
*/

test("username blank",async({page})=>{

await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.waitForTimeout(5000);

await page.getByPlaceholder('Password').fill('admin123');

await page.getByRole('button',{name:'Login'}).click();

    //Verify the error message

    await expect(page.getByText('Required')).toBeVisible();
    
})

test("username and pwd empty",async({page})=>{

    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //verify the login page

await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();

//verify the username and password fields 

await expect(page.getByPlaceholder('Username')).toBeVisible();

await expect(page.getByPlaceholder('Password')).toBeVisible();

//Click on  login button

await page.getByRole('button',{name:'Login'}).click();

//verify the error message
 await expect(page.getByText('Required')).toBeVisible();






})