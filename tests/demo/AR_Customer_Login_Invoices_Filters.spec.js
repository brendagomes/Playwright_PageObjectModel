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
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('textbox', { name: 'From :' }).click();
  await page.getByTitle('2023-09-01').getByText('1').click();
  await page.getByRole('textbox', { name: 'To :' }).click();
  await page.getByRole('dialog').getByRole('table').getByTitle('2023-09-05').getByText('5').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.pause();
  });
 