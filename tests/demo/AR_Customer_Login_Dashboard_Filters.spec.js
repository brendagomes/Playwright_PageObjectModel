import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('brenda+ifb1011@kredx.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('A');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Asdf!234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('.ant-select-selection-overflow').first().click();
  await page.getByTitle('In Progress').getByText('In Progress').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.pause();
});