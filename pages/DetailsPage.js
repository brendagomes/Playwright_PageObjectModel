exports.DetailsPage=class DetailsPage{

    constructor(page){
        this.page=page;
        this.Customer=page.getByRole('link', { name: 'Customers' });
    }

async gotoCustomers(){
  await this.Customer.click();
}
}
