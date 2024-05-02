module.exports = class Invoice {
    id = null;
    number = null;
    customerid = null;
    totalamount = null;
    invoicedate = null;

    constructor(data) {
        this.id = data.inv_id;
        this.number = data.inv_number;
        this.customerid = data.inv_customerid;
        this.totalamount = data.inv_totalamount;
        this.invoicedate = data.inv_invoicedate;
    }
}