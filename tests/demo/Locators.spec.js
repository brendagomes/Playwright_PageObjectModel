import {test,expect} from '@playwright/test';
test('Locator', async ({ page }) => {
    await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    await page.getByLabel('Email').click({
      modifiers: ['Control']
    });
    //await page.locator('//input[@id="username"]').fill("nikhil+abcde3002f@kredx.com");
    //await page.fill("//input[@id='username']",'nikhil+abcde3002f@kredx.com');
    await page.type("//input[@id='username']",'nikhil+abcde3002f@kredx.com');
    await page.locator('//input[@id="password"]').type("Asdf!234");
    await page.getByLabel('Password').press('Enter');    
  });
