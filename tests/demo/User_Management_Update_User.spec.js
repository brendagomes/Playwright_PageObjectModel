import { test, expect } from '@playwright/test';

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
  await page.getByRole('link', { name: 'Settings' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Users' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('Search...').click();
  await page1.getByPlaceholder('Search...').fill('brenda+user01@kredx.com');
  await page.pause();
  await page1.getByLabel('edit').locator('svg').click();
  await page1.getByPlaceholder('Mobile').click();
  await page1.getByPlaceholder('Mobile').fill('9999999990');
  await page1.getByRole('button', { name: 'update' }).click();
});