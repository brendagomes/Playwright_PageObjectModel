exports.LoginPage=class LoginPage{

    constructor(page){
        this.page=page
        this.email_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button=page.getByRole('button', { name: 'Sign In' })

    }
    async gotoLoginPage(){
        //await this.page.goto('https://biz-dev1.kredx.com/receivables/');
        await this.page.goto('https://biz-dev1-auth.kredx.com/realms/Shared/protocol/openid-connect/auth?response_type=code&client_id=shared-client&state=https://biz-dev1.kredx.com/receivables/&redirect_uri=https://biz-dev1.kredx.com/login_callback');
    }
    async login(email,password){
        await this.email_textbox.fill(email);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
    

}