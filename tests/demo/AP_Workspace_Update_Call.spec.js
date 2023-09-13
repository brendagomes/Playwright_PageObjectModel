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
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').press('CapsLock');
  await page.getByPlaceholder('Search').fill('IN2908286');
  await page.getByRole('row', { name: 'IN2908286 A_241 Girish Collections Invoice IN2908286 Aug 31st 2023, 08:13 PM Open' }).getByLabel('').check();
  await page.getByRole('button', { name: 'Update Call' }).click();
  await page.getByTitle('Open').click();
  await page.getByText('Resolved', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('Select date').click();
  await page.getByText('Now').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});