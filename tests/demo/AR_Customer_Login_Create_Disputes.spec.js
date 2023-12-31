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
  await page.getByRole('link', { name: 'Disputes' }).click();
  await page.getByRole('button', { name: 'Create Dispute' }).click();
  await page.getByLabel('Record Type').click();
  await page.getByText('Invoice', { exact: true }).click();
  await page.locator('.ant-select-selection-overflow').click();
  await page.getByTitle('TL29T180923/01').getByText('TL29T180923/01').click();
  await page.locator('div').filter({ hasText: /^Invoice Number$/ }).click();
  await page.getByLabel('Subject', { exact: true }).click();
  await page.getByLabel('Subject', { exact: true }).press('CapsLock');
  await page.getByLabel('Subject', { exact: true }).fill('D');
  await page.getByLabel('Subject', { exact: true }).press('CapsLock');
  await page.getByLabel('Subject', { exact: true }).fill('Dispute');
  await page.getByLabel('Reason Category').click();
  await page.getByTitle('Collections').getByText('Collections').click();
  await page.getByLabel('Reason Sub Category').click();
  await page.getByTitle('Pending Payment').getByText('Pending Payment').click();
  await page.getByLabel('Priority').click();
  await page.getByText('Medium', { exact: true }).click();
  await page.getByLabel('Details').click();
  await page.getByLabel('Details').press('CapsLock');
  await page.getByLabel('Details').fill('D');
  await page.getByLabel('Details').press('CapsLock');
  await page.getByLabel('Details').fill('Dispute');
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.pause();
});