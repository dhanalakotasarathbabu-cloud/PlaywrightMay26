import {test,expect} from '@playwright/test'

test ("multiselect drop down", async({page})=>{


        await page.goto("https://obstaclecourse.tricentis.com/Obstacles/94441/retry");

     await page.getByRole('listbox').selectOption('Functional testing');
     await page.getByRole('listbox').selectOption({label:'GUI testing'});
     await page.getByRole('listbox').selectOption({index: 4});


     await page.waitForTimeout(3000);

    })

    test("multiselecting drop down items", async({page})=>{


        await page.goto("https://obstaclecourse.tricentis.com/Obstacles/94441/retry");

     await page.getByRole('listbox').selectOption([{label: 'Functional testing'},{label:'GUI testing'},{index: 4}]);

     await page.waitForTimeout(3000);

    })