import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {HomePage} from '../../pages/HomePage';

test('test', async({page})=>{
  //Login
  //create object of login page
  const Login=new LoginPage(page)
  await Login.gotoLoginPage();
  await Login.login('nikhil+abcde3002f@kredx.com','Asdf!234');
  //await page.waitForTimeout(3000)

   const Customer= new DetailsPage(page)
   await Customer.addCustomer();
  // await Customer.createCustomer();
});

  // await page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
  // await page.getByLabel('Email').click();
  // await page.getByLabel('Email').fill('nikhil+abcde3002f@kredx.com');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('A');
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('Asdf!234');
  // await page.getByLabel('Password').press('Enter');
  // await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByRole('button', { name: 'Add Customers' }).click();
  // await page.getByRole('button', { name: 'Create Customer' }).click();
  // await page.getByLabel('Customer Code').click();
  // await page.getByLabel('Customer Code').press('CapsLock');
  // await page.getByLabel('Customer Code').fill('PTC1115');
  // await page.getByLabel('Customer Name').click();
  // await page.getByLabel('Customer Name').fill('PTC Solutions');
  // await page.getByLabel('GSTIN').click();
  // await page.getByLabel('GSTIN').click();
  // await page.getByLabel('GSTIN').press('Control+V');
  // await page.getByLabel('PAN', { exact: true }).click();
  // await page.getByLabel('PAN', { exact: true }).press('Control+V');
  // await page.getByLabel('PAN', { exact: true }).click();
  // await page.getByLabel('PAN', { exact: true }).press('Control+V');
  // await page.getByLabel('Customer Name').click();
  // await page.getByLabel('Customer Name').click();
  // await page.locator('div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').first().click();
  // await page.getByLabel('Name', { exact: true }).click();
  // await page.getByLabel('Name', { exact: true }).fill('PTC Solutions');
  // await page.getByLabel('Email').click();
  // await page.getByLabel('Email').fill('brenda+ptc1115@kredx.com');
  // await page.getByLabel('Phone Number').click();
  // await page.getByLabel('Phone Number').fill('9999999999');
  // await page.getByLabel('City').click();
  // await page.getByLabel('City').press('CapsLock');
  // await page.getByLabel('City').fill('B');
  // await page.getByLabel('City').press('CapsLock');
  // await page.getByLabel('City').fill('Bangalore');
  // await page.getByLabel('State').click();
  // await page.locator('div').filter({ hasText: /^State$/ }).click();
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByText('PTC1114').click();
