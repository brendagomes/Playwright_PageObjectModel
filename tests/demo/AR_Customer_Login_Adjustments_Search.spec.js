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
  await page.getByText('Documents').click();
  await page.getByRole('link', { name: 'Adjustments' }).click();
  await page.getByPlaceholder('Search for Reference Number, Customer Name...').click();
  await page.getByPlaceholder('Search for Reference Number, Customer Name...').press('CapsLock');
  await page.getByPlaceholder('Search for Reference Number, Customer Name...').fill('CR/1084');
  //await page.pause();
  });
 