import { test, expect } from '@playwright/test';
//import login page class
// enter classname //from-location of the file
import {LoginPage} from '../../pages/login'

test('test', async ({ page }) => {

  //create a const and instance of the class and pass the page object
  const Login=new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('nikhil+abcde3002f@kredx.com', 'Asdf!234')
});