const {test,expect} = require('@playwright/test');
test('Test Case :Automate Registration, Happy Flow ', async ({ browser,page }) => {
    const context=await browser.newContext();
    // Open new page
     page = await context.newPage();
     await page.goto('https://rahulshettyacademy.com/client');
     //locate class class="text-reset"
    await page.locator('.text-reset').click();
    //write first name
    await page.locator('#firstName').fill('');
    //write last name 
    await page.locator('#lastName').fill('Doe');
    //write email
    await page.locator('#userEmail').fill('johndoe11@gmail.com');
    //phone number userMobile
    await page.locator('#userMobile').fill('1234567890');
    //select from occupation classname is custom-select 
    await page.locator('.custom-select').selectOption({label: 'Student'});
    //select gender from type radio and class mt-3
    await page.locator("xpath=input[value='Female']");
    //password 
    await page.locator('#userPassword').fill('@Password1234');
    //confirm password 
    await page.locator('#confirmPassword').fill('@Password1234');
    // Locate the checkbox element using a CSS selector
    const checkbox = await page.locator('input[type="checkbox"][formcontrolname="required"]');

    // Check the checkbox
    await checkbox.check();

    //login
    // Locate the submit button element using a CSS selector
    const submitButton = await page.locator('input#login[type="submit"][name="login"]');
    //wait for 5 seconds
    await page.waitForTimeout(1000);
    // Click on the submit button
    await submitButton.click();

 });
test('Test Case:Automate Login ', async ({ browser,page }) => {
    const context=await browser.newContext();
    // Open new page
     page = await context.newPage();
     await page.goto('https://rahulshettyacademy.com/client');
    //write email
    await page.locator('#userEmail').fill('johndoe11@gmail.com');
    //password
    await page.locator('#userPassword').fill('@Password1234');
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    console.log(titles[0]);
    //title of the first name 
    
 });

 //Section 5 a:practice
 //dropdowns, radio elemenys,checkboxes,buttons,links
test('UI Elements', async ({ browser,page }) => {
    const context=await browser.newContext();
    // Open new page
     page = await context.newPage();
     await page.goto('https://rahulshettyacademy.com/loginpagePractise');
     const userName=await page.locator('#username');
     const signIn=await page.locator('signInBtn');
     await page.locator('.radiotextsty').last().click();
     await page.locator('#okayBtn').click();
     await expect ( page.locator('.radiotextsty').last()).toBeChecked();
     //await page.pause();
     const docs= await page.locator('a[href="https://rahulshettyacademy.com/documents-request"].blinkingText[target="_blank"]'); 
     await expect (docs).toHaveAttribute('class','blinkingText');
    }
    );
//Section 5 b:child windows handling and async and await while working with multiple windows
test('Child Windows Handling', async ({ browser, page }) => {
        const context = await browser.newContext();
        // Open new page
        page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/loginpagePractise');
        const docs = await page.locator('a[href="https://rahulshettyacademy.com/documents-request"].blinkingText[target="_blank"]');
        
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            docs.click(),
        ]);
        
        // Wait for the new page to load
        await newPage.waitForLoadState();
        const text = await newPage.locator('.red').allTextContents();
        console.log(text);
});

//section 6: codegen generated code  new push

test('test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.getByLabel('Username:').click();
    await page.getByLabel('Username:').fill('johndoe1@gmail.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('@');
    await page.getByLabel('Password:').press('CapsLock');
    await page.getByLabel('Password:').fill('@P');
    await page.getByLabel('Password:').press('CapsLock');
    await page.getByLabel('Password:').fill('@Password1234');
    await page.getByLabel('I Agree to the terms and').check();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByText('Incorrect username/password.').click();
  });