exports.HomePage=class HomePage{
    constructor(page){
        this.page=page
        this.link=page.getByRole('link', { name: 'Customers' });
        this.AddCustomer=page.getByRole('button', { name: 'Add Customers' })
        this.CreateCustomer=page.getByRole('button', { name: 'Create Customer' })
    }

async addCustomer(){

    await this.link.click();
    await this.AddCustomer.click();
    await this.CreateCustomer.click();
}
}

