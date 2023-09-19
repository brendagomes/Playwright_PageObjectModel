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
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByLabel('From').click();
  await page.locator('.ant-picker-header-prev-btn').click();
  await page.getByTitle('2023-08-01').getByText('1').click();
  await page.getByLabel('To', { exact: true }).click();
  await page.locator('div:nth-child(3) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > div:nth-child(2) > div > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click();
  await page.getByRole('dialog').getByRole('table').getByTitle('2023-08-08').getByText('8').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.pause();
  });
 