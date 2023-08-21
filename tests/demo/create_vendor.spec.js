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
  await page.getByRole('link', { name: 'Vendors' }).click();
  await page.getByRole('button', { name: 'Create Vendor' }).click();
  //assertion whether 'vendor name' field is visible or not
  await expect(await page.locator("//input[@id='vendor_name']")).toBeVisible();
  //check whether input box is empty or not
  await expect(await page.locator("//input[@id='vendor_name']")).toBeEmpty();
  //check whether editable or not
  await expect(await page.locator("//input[@id='vendor_name']")).toBeEditable();
  //check whether input field is enabled or not 
  await expect(await page.locator("//input[@id='vendor_name']")).toBeEditable();
  // await page.locator("//input[@id='vendor_name']").fill("SVS Solutions");
  await page.fill("//input[@id='vendor_name']", 'SVS Solutions')
  await page.locator("//input[@id='vendor_code']").fill('SVS1808');
  await page.getByLabel('Account Manager').click();
  await page.getByLabel('1Basic Details2Company & Bank Details3Other Details').getByText('Admin').click();
  await page.getByLabel('GSTIN').click();
  await page.getByLabel('GSTIN').click();
  await page.fill("//input[@id='gstin']", '29BMZPU9990L1ZP');
  await page.getByLabel('PAN', { exact: true }).click();
  await page.fill("//input[@id='pan']", 'BNZPM2501F');
  await page.getByLabel('Name', { exact: true }).click();
  await page.fill("//input[@id='contact_information_primary_contact_name']", 'SVS Solutions');
  await page.fill("//input[@id='contact_information_primary_contact_email_address']", 'brenda+testsvs1809@kredx.com');
  await page.fill("//input[@id='contact_information_primary_contact_phone_number']", '9999999999');
  await page.fill("//input[@id='contact_information_primary_contact_designation']", 'Manager');
  await page.getByRole('button', { name: 'Add additional contact' }).click();
  await page.fill("//input[@id='contact_information_additional_contact_0_name']", 'SVS');
  await page.fill("//input[@id='contact_information_additional_contact_0_email_address']", 'brenda+svs1809@kredx.com');
  await page.fill("//input[@id='contact_information_additional_contact_0_phone_number']", '9999999999');
  await page.fill("//input[@id='contact_information_additional_contact_0_designation']", 'Manager');
  await page.fill("//input[@id='address_street_address']", 'SVS Solutions,1st main,Bellandur');
  await page.getByLabel('Country').click();
  await page.getByText('India', { exact: true }).click();
  //await page.getByLabel('State').click();
  //await page.getByText('Karnataka', { exact: true }).click();
  await page.getByLabel('City').click();
  await page.fill("//input[@id='address_city']", 'Bangalore');
  await page.waitForTimeout(5000);
  await page.fill("//input[@id='address_pincode']", '560103');
  await page.waitForTimeout(5000)
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('SuccessVendor\'s Basic Details Are Saved Successfully').click({
    button: 'right'});
  });