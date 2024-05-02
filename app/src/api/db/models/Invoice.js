module.exports = class Invoice {
    id = null;
    number = null;
    customerid = null;
    totalamount = null;
    invoicedate = null;

    constructor(data) {
        this.id = data.par_id;
        this.number = data.par_number;
        this.customerid = data.par_customerid;
        this.totalamount = data.par_totalamount;
        this.invoicedate = data.par_invoicedate;
    }
}