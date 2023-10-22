const invoiceModel = require('../../models/invoice');
const { addInvoice } = require('../invoice_controller');

describe('Invoice Controller', () => {
  const mockRequest = {
    body: {
      date: '2023-10-12',
      orderNo: '1234567',
      billFrom: 'Supplier',
      billTo: 'Company',
      siteLocation: 'Colombo',
      totalAmount: 1000,
    },
  };
  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  };

  it('Should create an invoice and return the id', async () => {
    // Mock the invoiceModel.create function to return an object
    invoiceModel.create = jest.fn().mockResolvedValue({
      _id: 'uniqueId',
    });

    await addInvoice(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({ id: 'uniqueId' });
  });

  it('Should handle the case when invoice creation fails', async () => {
    // Mock the invoiceModel.create function to return null
    invoiceModel.create = jest.fn().mockResolvedValue(null);

    await addInvoice(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith('invoice could not be created!');
  });
});