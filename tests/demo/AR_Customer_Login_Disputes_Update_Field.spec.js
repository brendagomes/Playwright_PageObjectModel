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
  await page.getByRole('row', { name: 'Dispute Resolution D_179 ADJUSTMENT DR/1085 Collections Pending Payment Sep 19, 2023 Sep 20, 2023 Resolved 0 Days 20 Hours LOW PUBLIC Illaiya Raja --' }).getByLabel('').check();
  await page.getByRole('button', { name: 'Update Fields' }).click();
  await page.getByTitle('Status').click();
  await page.getByTitle('Priority').getByText('Priority').click();
  await page.locator('#priority').click();
  await page.getByText('High', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.pause();
});