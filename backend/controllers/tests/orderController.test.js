const Order = require("../../models/orderModel");
const { createOrder } = require("../orderController");

describe("Order Controller", () => {
	// Mock the response from the Order model
	const mockOrder = {
		_id: "mockId",
		orderNumber: 12345,
		siteLocation: "Sample Location",
		totalAmount: 1000,
		status: "Pending",
	};

	// Test the createOrder function
	describe("createOrder", () => {
		it("should create a new order", async () => {
			// Mock the create method
			Order.prototype.save = jest.fn().mockResolvedValue(mockOrder);
			const req = { body: mockOrder };
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			await createOrder(req, res);

			expect(res.status).toHaveBeenCalledWith(201);
			expect(res.json).toHaveBeenCalledWith(mockOrder);
		});

		it("should handle errors when creating an order", async () => {
			const errorMessage = "An error occurred";
			// Mock the save method to reject with an error
			Order.prototype.save = jest
				.fn()
				.mockRejectedValue(new Error(errorMessage));
			const req = { body: mockOrder };
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			await createOrder(req, res);

			expect(res.status).toHaveBeenCalledWith(400);
			expect(res.json).toHaveBeenCalledWith({
				error: "Error creating the order",
			});
		});
	});
});
