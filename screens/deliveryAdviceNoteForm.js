import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DeliveryAdviceNoteForm() {
	const [orderId, setOrderId] = useState("");
	const [driverId, setDriverId] = useState("");
	const [deliveryDate, setDeliveryDate] = useState("");
	const [productDetails, setProductDetails] = useState("");

	const navigation = useNavigation();

	const [orderNumbers, setOrderNumbers] = useState([]);

	useEffect(() => {
		fetchAllOrders(); // Fetch all orders when the component loads
	}, []);

	const fetchAllOrders = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/orders");
			if (response.ok) {
				const data = await response.json();
				const allOrderNumbers = data.map((order) => order.orderNumber);
				setOrderNumbers(allOrderNumbers);
			} else {
				// error msg
			}
		} catch (error) {
			// Handle error
		}
	};

	// const fetchPlacedOrders = async () => {
	// 	try {
	// 		const response = await fetch("http://localhost:3000/api/orders");
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			// Filter orders with status "Placed"
	// 			const placedOrders = data.filter(
	// 				(order) => order.status === "Placed"
	// 			);
	// 			const placedOrderNumbers = placedOrders.map(
	// 				(order) => order.orderNumber
	// 			);
	// 			setOrderNumbers(placedOrderNumbers); // Set the filtered order numbers in state
	// 		} else {
	// 			// Handle any errors when the request is not successful
	// 		}
	// 	} catch (error) {
	// 		// Handle fetch-related errors
	// 	}
	// };

	const handleSubmit = async () => {
		// Create a new Delivery Advice Note object to send to the server
		const deliveryAdviceNote = {
			orderId,
			driverId,
			deliveryDate,
			productDetails,
		};

		try {
			const response = await fetch(
				"http://localhost:3000/api/deliveryAdviceNotes",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(deliveryAdviceNote),
				}
			);

			if (response.ok) {
				// Successfully submitted the Delivery Advice Note
			} else {
				// Handle errors or display error messages
				console.error("Error submitting the Delivery Advice Note");
			}
		} catch (error) {
			// Handle network errors or other exceptions
			console.error("An error occurred:", error);
		}
	};

	// Sample list of available order IDs
	const availableOrderIds = ["24563", "47895", "00241", "44563"];

	// Sample list of available driver IDs
	const availableDriverIds = [
		"John Doe",
		"Alice Smith",
		"Bob Johnson",
		"Carol Williams",
	];

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require("../assets/back_btn_arrow.png")}
					style={styles.backButton}
					resizeMode="contain"
					onPress={() => navigation.goBack()}
				/>
				<Text style={styles.headerText}>Delivery Advice Note</Text>
			</View>
			<View style={styles.form}>
				<View style={styles.formGroup}>
					<View style={styles.labelContainer}>
						<Icon
							name="archive-outline"
							size={20}
							style={styles.icon}
						></Icon>
						<Text style={styles.label}>Order Number</Text>
					</View>
					<View style={styles.inputContainer}>
						<Picker
							selectedValue={orderId}
							onValueChange={(itemValue) => setOrderId(itemValue)}
							style={styles.picker}
						>
							<Picker.Item label="Select Order Number" value="" />
							{availableOrderIds.map((order, index) => (
								<Picker.Item
									label={order}
									value={order}
									key={index}
								/>
							))}
						</Picker>
						{/* <Picker
							selectedValue={orderId}
							onValueChange={(itemValue) => setOrderId(itemValue)}
							style={styles.picker}
						>
							<Picker.Item label="Select Order ID" value="" />
							{orderNumbers.map((orderNumber, index) => (
								<Picker.Item
									label={orderNumber.toString()}
									value={orderNumber.toString()}
									key={index}
								/>
							))}
						</Picker> */}
					</View>
				</View>
				<View style={styles.formGroup}>
					<View style={styles.labelContainer}>
						<Icon
							name="account-outline"
							size={20}
							style={styles.icon}
						></Icon>
						<Text style={styles.label}>Driver Name</Text>
					</View>
					<View style={styles.inputContainer}>
						<Picker
							selectedValue={driverId}
							onValueChange={(itemValue) =>
								setDriverId(itemValue)
							}
							style={styles.picker}
						>
							<Picker.Item
								label="Select Assigned Driver Name"
								value=""
							/>
							{availableDriverIds.map((order, index) => (
								<Picker.Item
									label={order}
									value={order}
									key={index}
								/>
							))}
						</Picker>
					</View>
				</View>
				<View style={styles.formGroup}>
					<View style={styles.labelContainer}>
						<Icon
							name="calendar-month-outline"
							size={20}
							style={styles.icon}
						></Icon>
						<Text style={styles.label}>Delivery Date</Text>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							value={deliveryDate}
							onChangeText={(text) => setDeliveryDate(text)}
							underlineColorAndroid="transparent"
							placeholder="DD/MM/YYYY"
						/>
					</View>
				</View>
				<View style={styles.formGroup}>
					<View style={styles.labelContainer}>
						<Icon
							name="file-document-outline"
							size={20}
							style={styles.icon}
						></Icon>
						<Text style={styles.label}>Delivery Details</Text>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={[styles.input, styles.multilineInput]}
							value={productDetails}
							onChangeText={(text) => setProductDetails(text)}
							underlineColorAndroid="transparent"
							placeholder="Enter Delivery Details"
							textAlignVertical="top"
						/>
					</View>
				</View>
				<TouchableOpacity
					style={styles.submitBtn}
					onPress={handleSubmit}
				>
					<Text style={styles.submitText}>Submit</Text>
				</TouchableOpacity>
			</View>
			{/* <Image
				source={require("../assets/delivery_truck.png")}
				style={styles.imageUnderSubmit}
				resizeMode="contain"
			/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		margin: 8,
		paddingTop: 30,
		paddingBottom: 20,
	},
	backButton: {
		width: 20,
		height: 20,
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
		paddingLeft: 20,
	},
	form: {
		padding: 16,
	},
	formGroup: {
		marginVertical: 8,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
	},
	inputContainer: {
		borderColor: "lightgray",
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "lightyellow",
		marginBottom: 10,
	},
	pickerContainer: {
		backgroundColor: "lightyellow",
		borderRadius: 5,
	},
	input: {
		height: 40,
		padding: 8,
	},
	multilineInput: {
		height: 100,
	},
	labelContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	icon: {
		marginRight: 10,
	},
	submitBtn: {
		backgroundColor: "#F9A826",
		padding: 12,
		borderRadius: 5,
		alignItems: "center",
		marginVertical: 16,
		marginTop: 180,
	},
	submitText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "black",
	},
	imageUnderSubmit: {
		width: 150,
		height: 150,
		marginVertical: 16,
	},
});
