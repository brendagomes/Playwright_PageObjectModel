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
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').press('CapsLock');
  await page.getByPlaceholder('Search').fill('A_241');
//await page.pause();
   await page.locator('#apollo-table-27aebb48-69ac-4979-8671-244ffe326446 > div > div.ant-table-body > table > tbody > tr:nth-child(4) > td.ant-table-cell.ant-table-selection-column.ant-table-cell-fix-left > label > span > input').check();
   await page.pause();
   await page.locator(getByLabel('', { exact: true })).check();
    await page.pause();
  await page.locator('u').filter({ hasText: 'Dispute Resolution' }).click();
  await page.locator('div').filter({ hasText: /^StatusOPEN$/ }).getByAltText('edit-icon').click();
  await page.getByText('Open').click();
  await page.getByText('InProgress').click();
  await page.getByRole('button', { name: 'Update' }).click();

});