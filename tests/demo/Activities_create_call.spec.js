import { test, expect } from '@playwright/test';

import {CreateCall} from '../../pages/activities_create_call'
test('test', async ({ page }) => {

    const Call = new CreateCall(page)
    await Call.gotoCreateCall()
    await Call.login('nikhil+abcde3002f@kredx.com', 'Asdf!234')
    //await Call.createcall(IFB,TestCall#16,TestCall#16)
    //   await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    //   await page.getByLabel('Email').click({
    //     modifiers: ['Control']
    //   });
    //   await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
    //   await page.getByLabel('Password').click();
    //   await page.getByLabel('Password').press('CapsLock');
    //   await page.getByLabel('Password').fill('A');
    //   await page.getByLabel('Password').press('CapsLock');
    //   await page.getByLabel('Password').fill('Asdf!234');
    //   await page.getByRole('button', { name: 'Sign In' }).click();
    //   await page.getByRole('link', { name: 'Activities' }).click();
    //   await page.getByRole('button', { name: 'Create Call' }).click();
    //   await page.getByLabel('Record Type').click();
    //   await page.getByTitle('Customer', { exact: true }).getByText('Customer').click();
    //   await page.getByRole('combobox', { name: '* Customer Name :' }).click();
    //   await page.getByRole('combobox', { name: '* Customer Name :' }).fill('ifb');
    //   await page.getByTitle('IFB INDUSTRIES LIMITED').getByText('IFB INDUSTRIES LIMITED').click();
    //   await page.getByLabel('Call Type').click();
    //   await page.getByTitle('Google Meet').getByText('Google Meet').click();
    //   await page.getByPlaceholder('Select date').click();
    //   await page.getByText('Now').click();
    //   await page.getByLabel('Purpose').click();
    //   await page.getByTitle('Collections').getByText('Collections').click();
    //   await page.getByLabel('Subject', { exact: true }).click();
    //   await page.getByLabel('Subject', { exact: true }).press('CapsLock');
    //   await page.getByLabel('Subject', { exact: true }).fill('T');
    //   await page.getByLabel('Subject', { exact: true }).press('CapsLock');
    //   await page.getByLabel('Subject', { exact: true }).press('CapsLock');
    //   await page.getByLabel('Subject', { exact: true }).fill('Test C');
    //   await page.getByLabel('Subject', { exact: true }).press('CapsLock');
    //   await page.getByLabel('Subject', { exact: true }).fill('Test Call#15');
    //   await page.getByLabel('Details').click();
    //   await page.getByLabel('Details').press('CapsLock');
    //   await page.getByLabel('Details').fill('T');
    //   await page.getByLabel('Details').press('CapsLock');
    //   await page.getByLabel('Details').fill('Test ');
    //   await page.getByLabel('Details').press('CapsLock');
    //   await page.getByLabel('Details').fill('Test C');
    //   await page.getByLabel('Details').press('CapsLock');
    //   await page.getByLabel('Details').fill('Test Call');
    //   await page.getByLabel('Details').press('ArrowUp');
    //   await page.getByLabel('Details').click();
    //   await page.getByLabel('Details').fill('Test Call#15');
    //   await page.getByRole('button', { name: 'Submit' }).click();
    //   await page.getByLabel('Calls').getByText('Test Call#14').click();
    //   await page.getByPlaceholder('Enter Subject..').click();
    //   await page.getByPlaceholder('Enter Subject..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Subject..').fill('T');
    //   await page.getByPlaceholder('Enter Subject..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Subject..').fill('Test ');
    //   await page.getByPlaceholder('Enter Subject..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Subject..').fill('Test C');
    //   await page.getByPlaceholder('Enter Subject..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Subject..').fill('Test Call#14');
    //   await page.getByPlaceholder('Enter Details..').click();
    //   await page.getByPlaceholder('Enter Details..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Details..').fill('T');
    //   await page.getByPlaceholder('Enter Details..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Details..').fill('Test ');
    //   await page.getByPlaceholder('Enter Details..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Details..').fill('Test C');
    //   await page.getByPlaceholder('Enter Details..').press('CapsLock');
    //   await page.getByPlaceholder('Enter Details..').fill('Test Call#14');
    //   await page.pause()
    //   await page.getByRole('button', { name: 'Submit' }).click();
    //   await page.getByLabel('COMMENTS').getByRole('img').first().click();
});