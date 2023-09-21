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
  await page.getByRole('row', { name: 'RV2421D1 file-pdf Mar 29, 2023 Mar 30, 2023 Shetty Traders Pvt Ltd Posted ₹555,555.00 -- Bangalore Engineering --' }).getByLabel('', { exact: true }).check();
  await page.getByRole('button', { name: 'Create Dispute' }).click();
  await page.getByLabel('Subject', { exact: true }).click();
  await page.getByLabel('Subject', { exact: true }).press('CapsLock');
  await page.getByLabel('Subject', { exact: true }).fill('D');
  await page.getByLabel('Subject', { exact: true }).press('CapsLock');
  await page.getByLabel('Subject', { exact: true }).fill('Dispute ');
  await page.getByLabel('Subject', { exact: true }).press('CapsLock');
  await page.getByLabel('Subject', { exact: true }).fill('Dispute R');
  await page.getByLabel('Subject', { exact: true }).press('CapsLock');
  await page.getByLabel('Subject', { exact: true }).fill('Dispute Resolution');
  await page.getByLabel('Reason Category').click();
  await page.getByTitle('Invoice Pricing').getByText('Invoice Pricing').click();
  await page.getByLabel('Reason Sub Category').click();
  await page.getByTitle('Incorrect Amount').getByText('Incorrect Amount').click();
  await page.getByLabel('Priority').click();
  await page.getByText('Low', { exact: true }).click();
  await page.getByLabel('Details').click();
  await page.getByLabel('Details').press('CapsLock');
  await page.getByLabel('Details').fill('D');
  await page.getByLabel('Details').press('CapsLock');
  await page.getByLabel('Details').fill('Dispute ');
  await page.getByLabel('Details').press('CapsLock');
  await page.getByLabel('Details').fill('Dispute R');
  await page.getByLabel('Details').press('CapsLock');
  await page.getByLabel('Details').fill('Dispute Resolution');
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.pause();
});