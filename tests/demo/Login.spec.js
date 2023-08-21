import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

test('test', async({page})=>{
    //Login
    //create object of login page
    const Login=new LoginPage(page)
    await Login.gotoLoginPage();
    await Login.login('nikhil+abcde3002f@kredx.com','Asdf!234');
    //await page.waitForTimeout(3000)
})