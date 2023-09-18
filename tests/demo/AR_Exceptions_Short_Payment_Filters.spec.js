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
  await page.getByRole('tab', { name: 'Short Payment' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('#payment_date_from').click();
  await page.getByTitle('2023-09-01').getByText('1').click();
  await page.locator('#payment_date_to').click();
  await page.getByRole('cell', { name: '18' }).locator('div').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});