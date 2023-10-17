const invoiceModel = require('../models/invoice')
const create = require('./createInvoice')

describe('creating invoices', () => {
    it.only('Should not create an invoice and throw error when order number is not unique', async () => {
        invoiceModel.findOne = jest.fn().mockReturnValueOnce({
            orderNo:"1234446"
        });

        invoiceModel.prototype.save = jest.fn().mockImplementation(() => {});

        await expect(create("1234446", "2023.10.07", "Binod", "Maga", 120000)).rejects.toThrowError();
    })

    it.only('Should create an invoice and return it when order number is unique', async () => {
        invoiceModel.findOne = jest.fn().mockReturnValueOnce();

        invoiceModel.prototype.save = jest.fn().mockImplementation(() => {});

        const {invoice} = await create("1234456", "2023.10.07", "Binod", "Maga", 120000);
        expect(invoice.orderNo).toEqual("1234456");

    })
})