exports.LoginPage=class LoginPage {

    //page object should be passed to the class//create constructor pass page object as an argument and 
    //inside the constructor add the locators
    constructor(page) {

        //create class variable called page and its value is equal to whatever comes in the constructor i.e page
        this.page = page
        //3 objects in login page email(username),pwd,sign-in
        //create 3 variables and give values (locators)
        //use 'this.' for class variables 
        this.email_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button=page.getByRole('button', { name: 'Sign In' })

    }
    //function 
    async gotoLoginPage(){
        //await this.page.goto('https://biz-dev1.kredx.com/receivables/');
        await this.page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    }
//create methods which will do the actions enterEmail(){}enterPassword(){}clickOnSignIn(){}
//3 actions enter email,pwd,sign-in
//create signgle function
//instead of hardcoding the values,pass values as argument to the functions
async login(email,password){
    await this.email_textbox.fill(email)
    await this.password_textbox.fill(password)
    await this.login_button.click()
}



}