import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
  await page.getByLabel('Email').click({
    modifiers: ['Control']
  });
  await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('A');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Asdf!234');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('tab', { name: 'Exceptions' }).click();
  await page.getByRole('tab', { name: 'Advice Verification' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByPlaceholder('Enter Payment Ref. Number').click();
  await page.locator('div:nth-child(3) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click();
  await page.getByText('Email', { exact: true }).click();
  await page.getByRole('dialog').locator('div').filter({ hasText: 'Payment Ref. NumberReason Select ReasonSource TypeEmail EMAILWEB_PORTALEmailWeb ' }).nth(1).click();
  await page.getByText('Web Portal').nth(1).click();
  await page.locator('div').filter({ hasText: /^Source Type$/ }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});