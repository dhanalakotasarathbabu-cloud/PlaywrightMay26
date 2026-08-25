import {test,expect} from '@playwright/test'

test (" native drop downs", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

//click on books

await page.getByRole('link', {name: 'Books'}).first().click();

// select sort by using visible text by using label from the drop down.

//await page.getByRole('combobox').nth(1).selectOption({label : 'Price: High to Low'});

//get  by locator

await page.locator('#products-orderby').selectOption ({label : 'Price: High to Low'}); // using page.locator and label 
//await page.locator('#products-orderby').selectOption ('Price: High to Low'); // using page.locator and direct value.

//value is a attribute of the html DOM
//await page.locator('#products-orderby').selectOption ({value : 'https://demowebshop.tricentis.com/books?orderby=10'});

//select by index : Starts with 0 
await page.locator('#products-orderby').selectOption ({index:2});



await page.waitForTimeout (3000);

})

// Verify the value in dropdown is selected or not
test('verify dropdown value', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');  
    await page.getByRole('link', { name: 'Books' }).first().click();
	
    // select the option from the dropdown and verify the text is selected or not
    await page.locator('#products-orderby').selectOption({ label: 'Price: Low to High' });


    // // capture the selected option text
    const selectedOptionText = await page.locator('#products-orderby').textContent();
    console.log('Selected option text:', selectedOptionText);


    // Verify the selected option text is 'Price: Low to High'
    expect(selectedOptionText).toContain('Price: Low to High');
    expect(await page.locator('#products-orderby').textContent()).toContain('Price: Low to High');


    // another way to verify the selected option text is 'Price: Low to High'
    const selectedOptionValue = await page.locator('#products-orderby').inputValue();
    console.log('Selected option value:', selectedOptionValue);


    expect(selectedOptionValue).toBe('https://demowebshop.tricentis.com/books?orderby=10');


    // verify visible text of the selected option is 'Price: Low to High'
    const selectedOptionVisibleText = await page.locator('#products-orderby option:checked').textContent();
    console.log('Selected option visible text:', selectedOptionVisibleText);
    expect(selectedOptionVisibleText).toBe('Price: Low to High');


        // verify visible text of the selected option is 'Price: Low to High'
    const selectedOptionVisibleInput = await page.locator('#products-orderby option:checked').inputValue(); // Error
    console.log('Selected option visible text:', selectedOptionVisibleInput);
    expect(selectedOptionVisibleInput).toBe('Price: Low to High');


    await page.waitForTimeout(3000); // Wait for 2 seconds to allow the page to update
});
/*
        // verify visible text of the selected option is 'Price: Low to High'
    const selectedOptionVisibleInput = await page.locator('#products-orderby option:checked').innerText();
    console.log('Selected option visible text:', selectedOptionVisibleInput);
    expect(selectedOptionVisibleInput).toBe('Price: Low to High');
    *


    
