import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
    await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
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
    await page.getByRole('link', { name: 'Adjustments' }).click();
    await page.getByRole('button', { name: 'Upload Bulk Notes' }).click();
    await page.locator('.drag-and-drop-container>input').setInputFiles('tests\\AdjustmentsUpload\\AdjustmentsUpload.xlsx');
});




