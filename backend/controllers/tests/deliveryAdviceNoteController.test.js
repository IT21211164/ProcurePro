const DeliveryAdviceNote = require("../../models/deliveryAdviceNoteModel");
const { createDeliveryAdviceNote } = require("../deliveryAdviceNoteController");

describe("Delivery Advice Note Controller", () => {
	// Mock the response from the DeliveryAdviceNote model
	const mockDeliveryAdviceNote = {
		_id: "mockId",
		orderID: "12345",
		driverName: "John Doe",
		deliveryDate: "2023-10-16",
		deliveryDetails: "Sample details",
	};

	// Test the createDeliveryAdviceNote function
	describe("createDeliveryAdviceNote", () => {
		it("should create a new delivery advice note", async () => {
			// Mock the create method
			DeliveryAdviceNote.create = jest
				.fn()
				.mockResolvedValue(mockDeliveryAdviceNote);
			const req = { body: mockDeliveryAdviceNote };
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			await createDeliveryAdviceNote(req, res);

			expect(res.status).toHaveBeenCalledWith(201);
			expect(res.json).toHaveBeenCalledWith(mockDeliveryAdviceNote);
		});

		it("should handle errors when creating a delivery advice note", async () => {
			const errorMessage = "An error occurred";
			// Mock the create method to reject with an error
			DeliveryAdviceNote.create = jest
				.fn()
				.mockRejectedValue(new Error(errorMessage));
			const req = { body: mockDeliveryAdviceNote };
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			await createDeliveryAdviceNote(req, res);

			expect(res.status).toHaveBeenCalledWith(400);
			expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
		});
	});
});
