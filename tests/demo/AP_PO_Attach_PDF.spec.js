import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/payables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
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
    await page.getByText('Documents').click();
    await page.getByRole('link', { name: 'Purchase Orders' }).click();
    await page.getByRole('button', { name: 'upload Upload' }).click();
    await page.locator('body div.ant-modal-wrap div.ant-modal-content > div.ant-modal-body div.ant-upload-drag input[type=file]').setInputFiles('tests\\AP_Purchase_Order\\AP-Purchase Order.xlsx');
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByText('PO2713TT18').click();
    await page.getByRole('link', { name: 'Purchase Orders' }).click();
    await page.getByRole('row', { name: 'PO2713TT18 Aug 21, 2023 Aug 21, 2023 Shetty Traders Pvt Ltd Approved ₹100,000.00 ₹0.00' }).getByLabel('').check();
    await page.getByRole('button', { name: 'Attach PDF' }).click();
    await page.locator('body div.ant-modal-content div.drag-and-drop-container > input[type=file]').setInputFiles('tests\\PDF\\PDF2.pdf');
    await page.getByRole('button', { name: 'file-pdf' }).click();
    await page.getByText('PO2713TT18').click();
    await page.getByLabel('more').locator('svg').click();
    await page.getByRole('button', { name: 'View PDF' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
});