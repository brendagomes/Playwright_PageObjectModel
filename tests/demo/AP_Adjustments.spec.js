import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/payables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
    await page.getByLabel('Email').click({
        modifiers: ['Control']
    });
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('A');
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('Asdf!234');
    await page.getByLabel('Password').press('Enter');
    await page.getByText('Documents').click();
    await page.getByRole('link', { name: 'Upload' }).click();
    await page.getByRole('button', { name: 'Upload down' }).click();
    await page.getByText('Upload Excel').click();
    await page.locator('body div.ant-modal-wrap.upload-modal-body div.ant-modal-content > div.ant-modal-body div.ant-upload.ant-upload-drag input[type=file]').setInputFiles('tests\\AP_Adjustments\\AP_Adjustments.xlsx');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('Digitization process started successfully').click();
    await page.goto('https://biz-dev1.kredx.com/payables/documents-upload#');
    await page.goto('https://biz-dev1.kredx.com/payables/documents-upload#');
    await page.getByText('Documents', { exact: true }).click();
    await page.getByRole('link', { name: 'Adjustments' }).click();
    await page.getByText('IN320711').click();
});