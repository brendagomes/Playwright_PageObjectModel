import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/payables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
  await page.getByLabel('Email').click({
    modifiers: ['Control']
  });
  await page.getByLabel('Email').fill('brenda+testst01@kredx.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('A');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Asdf!234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Documents').click();
  await page.getByRole('link', { name: 'Purchase Orders' }).click();
  await page.getByText('PO Date').click();
  await page.getByRole('cell', { name: 'PO Date caret-up caret-down' }).click();
  //await page.pause();
});