const Driver = require("../../models/driverModel");
const { createDriver } = require("../driverController");

describe("Driver Controller", () => {
	// Mock the response from the Driver model
	const mockDriver = {
		_id: "mockId",
		driverName: "John Doe",
		driverNIC: "123456789",
		driverLicense: "ABC123",
		driverTelephone: 1234567890,
		driverStatus: "Available",
	};

	// Test the createDriver function
	describe("createDriver", () => {
		it("should create a new driver", async () => {
			// Mock the create method
			Driver.create = jest.fn().mockResolvedValue(mockDriver);
			const req = { body: mockDriver };
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			await createDriver(req, res);

			expect(res.status).toHaveBeenCalledWith(201);
			expect(res.json).toHaveBeenCalledWith(mockDriver);
		});

		it("should handle errors when creating a driver", async () => {
			const errorMessage = "An error occurred";
			// Mock the create method to reject with an error
			Driver.create = jest
				.fn()
				.mockRejectedValue(new Error(errorMessage));
			const req = { body: mockDriver };
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			await createDriver(req, res);

			expect(res.status).toHaveBeenCalledWith(400);
			expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
		});
	});
});
