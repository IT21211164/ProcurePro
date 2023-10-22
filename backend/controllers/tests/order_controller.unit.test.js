const orderModel = require('../../models/order'); 
const { updateOrderStatus, displayOrders } = require('../order_controller'); 

describe('Update Order Status Controller', () => {
  const mockRequest = {
    params: { id: '123' }, // Replace with a valid order ID
    body: { orderStatus: 'Accepted' }, // Replace with the desired status
  };
  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  };

  it('Should update the order status and return the updated order', async () => {
    // Mock the orderModel functions to return expected results
    orderModel.findById = jest.fn().mockResolvedValue({ _id: '123' });
    orderModel.findByIdAndUpdate = jest.fn().mockResolvedValue({
      _id: '123',
      status: 'Accepted',
    });

    await updateOrderStatus(mockRequest, mockResponse);

    // Assert that the response status should be 200 and the JSON response contains the updated order
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ _id: '123', status: 'Accepted' });
  });

  it('Should handle the case when the order does not exist', async () => {
    // Mock the orderModel.findById function to return null, simulating a non-existent order
    orderModel.findById = jest.fn().mockResolvedValue(null);

    await updateOrderStatus(mockRequest, mockResponse);

    // Assert that the response status should be 404 and the JSON response contains an error message
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith('Order does not exist in the database');
  });

  it('Should handle the case when the order cannot be updated', async () => {
    // Mock the orderModel.findById function to return a valid order
    orderModel.findById = jest.fn().mockResolvedValue({ _id: '123' });

    // Mock the orderModel.findByIdAndUpdate function to return null, simulating a failed update
    orderModel.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

    await updateOrderStatus(mockRequest, mockResponse);

    // Assert that the response status should be 403 and the JSON response contains an error message
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith('Order cannot be updated');
  });
});

describe('Display Orders Controller', () => {
    const mockRequest = {
      query: { status_ne: 'Not Approved' }, // Replace with the desired status to exclude
    };
    const mockResponse = {
      status: jest.fn(() => mockResponse),
      json: jest.fn(),
    };
  
    it('Should fetch and return orders with status not equal to the provided status', async () => {
      // Mock the orderModel.find function to return an array of orders
      orderModel.find = jest.fn().mockResolvedValue([
        { _id: '1', status: 'Accepted' },
        { _id: '2', status: 'Rejected' },
      ]);
  
      await displayOrders(mockRequest, mockResponse);
  
      // Assert that the response status should be 200 and the JSON response contains the fetched orders
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith([
        { _id: '1', status: 'Accepted' },
        { _id: '2', status: 'Rejected' },
      ]);
    });
  
    it('Should handle the case when no orders match the provided status', async () => {

      orderModel.find = jest.fn().mockResolvedValue(null);
  
      await displayOrders(mockRequest, mockResponse);
  
      // Assert that the response status should be 401 and the JSON response contains an error message
      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith('Something is wrong. Orders cannot be fetched');
    });
  });