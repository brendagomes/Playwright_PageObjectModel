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
  await page.getByText('GRN2208244').click();
  await page.getByRole('link', { name: 'GRN' }).click();
  await page.getByRole('row', { name: 'GRN2208244 Aug 22, 2023 123497 Shetty Traders Pvt Ltd Pharma 12397' }).getByLabel('').check();
  await page.getByRole('button', { name: 'Attach PDF' }).click();
  await page.locator('body div.ant-modal-content div.drag-and-drop-container > input[type=file]').setInputFiles('tests\\PDF\\PDF2.pdf');
  await page.getByText('Goods Receipt Note PDF Uploaded And Attached').click();
  await page.getByRole('cell', { name: 'GRN2208244 file-pdf' }).getByRole('button').click();
  await page.getByText('GRN2208244').click();
  await page.getByLabel('more').locator('svg').click();
  await page.getByRole('button', { name: 'View PDF' }).click();
  await page.frameLocator('iframe[title="GRN"]').locator('#sub-frame-error').click();
});