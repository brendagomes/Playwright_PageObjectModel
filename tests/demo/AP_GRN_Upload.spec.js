import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/payables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
  await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('A');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Asdf!234');
  await page.getByLabel('Password').press('Enter');
  await page.getByText('Documents').click();
  await page.getByRole('link', { name: 'GRN' }).click();
  await page.getByRole('button', { name: 'upload Upload' }).click();
  await page.locator('body div.ant-modal-wrap div.ant-modal-content > div.ant-modal-body div.ant-upload-drag input[type=file]').setInputFiles('tests\\AP_GRN\\AP_GRN.xlsx');
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByText('GRN2208236').click();

  
});