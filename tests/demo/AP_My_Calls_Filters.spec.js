import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/payables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    await page.getByRole('link', { name: 'Try Another Way' }).click();
    await page.locator('#kc-select-credential-form div').filter({ hasText: 'Username and password Sign in by entering your username and password.' }).nth(1).click();
    await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('A');
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('Asdf!234');
    await page.getByLabel('Password').press('Enter');
    await page.getByRole('link', { name: 'Activities' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('combobox', { name: 'Vendor Name :' }).click();
    await page.getByRole('combobox', { name: 'Vendor Name :' }).press('CapsLock');
    await page.getByRole('combobox', { name: 'Vendor Name :' }).fill('SRL SOLUTIONS');
    await page.getByTitle('SRL Solutions').getByText('SRL Solutions').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.pause();
});