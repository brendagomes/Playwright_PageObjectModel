exports.CreateCall = class CreateCall {


    constructor(page) {
        this.page = page
        this.email_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Sign In' })
        this.link = page.getByRole('link', { name: 'Activities' })
        this.create_call_button = page.getByRole('button', { name: 'Create Call' })
        this.record_type_textbox = page.getByLabel('Record Type')
        this.customer_textbox = page.getByTitle('Customer', { exact: true }).getByText('Customer')
        this.combobox_textbox = page.getByRole('combobox', { name: '* Customer Name :' })
        //await page.getByRole('combobox', { name: '* Customer Name :' }).fill('ifb');
        this.customer_textbox = page.getByTitle('Customer', { exact: true }).getByText('Customer')
        this.title = page.getByTitle('IFB INDUSTRIES LIMITED').getByText('IFB INDUSTRIES LIMITED')
        this.call_type_textbox = page.getByLabel('Call Type')
        this.title = page.getByTitle('Google Meet').getByText('Google Meet')
        this.date_textbox = page.getByPlaceholder('Select date')
        this.now_button = page.getByText('Now')
        this.purpose_textbox = page.getByLabel('Purpose')
        this.title = page.getByTitle('Collections').getByText('Collections')
        this.subject_textbox = page.getByLabel('Subject', { exact: true })
        // this.label=page.getByLabel('Subject', { exact: true }).press('CapsLock');
        // this.label=page.getByLabel('Subject', { exact: true }).fill('T');
        // this.label=page.getByLabel('Subject', { exact: true }).press('CapsLock');
        // this.label=page.getByLabel('Subject', { exact: true }).press('CapsLock');
        // this.label=page.getByLabel('Subject', { exact: true }).fill('Test C');
        // this.label=page.getByLabel('Subject', { exact: true }).press('CapsLock');
        // this.label=page.getByLabel('Subject', { exact: true }).fill('Test Call#13');
        this.details_textbox = page.getByLabel('Details')
        // this,label=page.getByLabel('Details').press('CapsLock');
        // this.label=page.getByLabel('Details').fill('T');
        // this.label=page.getByLabel('Details').press('CapsLock');
        // this.label=page.getByLabel('Details').fill('Test ');
        // this.label=page.getByLabel('Details').press('CapsLock');
        // this.label=page.getByLabel('Details').fill('Test C');
        // this.label=page.getByLabel('Details').press('CapsLock');
        // this.label=page.getByLabel('Details').fill('Test Call');
        // this.label=page.getByLabel('Details').press('ArrowUp');
        // this.label=page.getByLabel('Details').click();
        // this.label=page.getByLabel('Details').fill('Test Call#13');
        this.submit_button = page.getByRole('button', { name: 'Submit' })
    }
    //function 
    async gotoCreateCall() {
        //await this.page.goto('https://biz-dev1.kredx.com/receivables/');
        await this.page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    }
    async login(email, password) {
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
    async createcall(customername,subject,details){
        await this.link.click()
        await this.create_call_button.click()
        await this.record_type_textbox.click()
        await this.customer_textbox.click()
        await this.combobox_textbox.click()
        await this.combobox_textbox.fill('customername') //ifb
        await this.customer_textbox.click()
        await this.title.click()
        await this.call_type_textbox.click()
        await this.title.click()
        await this.date_textbox.click()
        await this.now_button.click()
        await this.purpose_textbox.click()
        await this.title.click()
        await this.subject_textbox.click()
        await this.subject_textbox.press('CapsLock')
        await this.subject_textbox.fill('T');
        await this.subject_textbox.press('CapsLock');
        await this.subject_textbox.click()
        await this.subject_textbox.press('CapsLock');
        await this.subject_textbox.fill('Test C');
        await this.subject_textbox.press('CapsLock');
        await this.subject_textbox.fill('subject');//Test Call#15
        await this.details_textbox.click();
        await this.details_textbox.press('CapsLock');
        await this.details_textbox.fill('T');
        await this.details_textbox.press('CapsLock');
        await this.details_textbox.fill('Test ');
        await this.details_textbox.press('CapsLock');
        await this.details_textbox.fill('Test C');
        await this.details_textbox.press('CapsLock');
        await this.details_textbox.fill('Test Call');
        await this.details_textbox.press('ArrowUp');
        await this.details_textbox.click();
        await this.details_textbox.click();
        await this.details_textbox.press('CapsLock');
        await this.details_textbox.fill('details');//Test Call#15
        await this.submit_button.click();
    }
    }










//         this.login_button=page.getByRole('button', { name: 'Sign In' })


//     }
// }
// //function
// async gotoLoginPage(){
//     //await this.page.goto('https://biz-dev1.kredx.com/receivables/');
//     await this.page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
// }
// //create methods which will do the actions enterEmail(){}enterPassword(){}clickOnSignIn(){}
// //3 actions enter email,pwd,sign-in
// //create signgle function
// //instead of hardcoding the values,pass values as argument to the functions
// async login(email,password){
// await this.email_textbox.fill(email)
// await this.password_textbox.fill(password)
// await this.login_button.click()
// }



// }
// }