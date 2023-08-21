import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
  await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/payables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
  await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
  await page.getByLabel('Email').click({
    modifiers: ['Control']
  });
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('A');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Asdf!234');
  await page.getByLabel('Password').press('Enter');
  await page.getByText('Documents').click();
  await page.getByRole('link', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Upload down' }).click();
  await page.getByText('Upload Excel').click();
  await page.locator('.ant-upload ant-upload-drag>span>input').setInputFiles('tests\\AP_Upload_Summary\\AP Invoice Upload 18-08-23.xlsx');
  //await page.locator('.ant-upload-drag-container').setInputFiles('tests\\AP_Upload_Summary\\AP Invoice Upload 18-08-23.xlsx');
  //await page.getByRole('button', { name: 'You can drag and drop file to upload or browse. Supported file types: XLS, XLSX or CSV file' }).click();
});