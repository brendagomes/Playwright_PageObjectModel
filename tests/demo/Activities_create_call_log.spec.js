import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/payables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    await page.getByLabel('Email').click({
        modifiers: ['Control']
    });
    await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('A');
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('Asdf!234');
    await page.getByLabel('Password').press('Enter');
    await page.getByRole('link', { name: 'Activities' }).click();
    await page.getByRole('button', { name: 'Create Call' }).click();
    //check radio button
    await page.locator("//input[@value='LOG']").check();
    //await page.check("//input[@value='LOG']");
    //checked or not
    await expect(await page.locator("//input[@value='LOG']")).toBeChecked();
    //if checked->true
    await expect(await page.locator("//input[@value='LOG']").isChecked()).toBeTruthy();

    await page.locator("//input[@value='LOG']").check();
    //radio button should not selected
    await expect(await page.locator("//input[@value='SCHEDULED']").isChecked()).toBeFalsy();





    //await page.getByText('Log').click({
    //button: 'right'

    //input[@class='ant-radio-input']
});