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
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('textbox', { name: 'From :' }).click();
  await page.locator('.ant-picker-header-prev-btn').click();
  await page.getByText('29').click();
  await page.getByRole('textbox', { name: 'To :' }).click();
  await page.locator('div:nth-child(4) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > div:nth-child(2) > div > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click();
  await page.getByRole('dialog').getByRole('table').getByTitle('2023-08-31').getByText('31').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.pause();
});