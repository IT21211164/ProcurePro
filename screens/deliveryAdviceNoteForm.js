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
import axios from "axios";

export default function DeliveryAdviceNoteForm() {
	const [orderId, setOrderId] = useState("");
	const [driverName, setDriverName] = useState("");
	const [deliveryDate, setDeliveryDate] = useState("");
	const [productDetails, setProductDetails] = useState("");

	const [fetchedOrderNumbers, setFetchedOrderNumbers] = useState([]);
	const [fetchedDrivers, setFetchedDrivers] = useState([]);
	const [selectedDriverId, setSelectedDriverId] = useState("");

	const navigation = useNavigation();

	useEffect(() => {
		fetchPlacedOrders();
		fetchAvailableDrivers();
	}, []);

	const fetchPlacedOrders = () => {
		fetch("http://192.168.8.117:3000/api/orders/read", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				var data = res;
				const placedOrders = data.filter(
					(order) => order.status === "Placed"
				);
				setFetchedOrderNumbers(placedOrders);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const fetchAvailableDrivers = () => {
		fetch("http://192.168.8.117:3000/api/drivers/read", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				var data = res;
				const availableDrivers = data.filter(
					(driver) => driver.driverStatus === "Available"
				);
				setFetchedDrivers(availableDrivers);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = async () => {
		// Create a new Delivery Advice Note object to send to the server
		const deliveryAdviceNote = {
			orderId,
			driverName,
			deliveryDate,
			productDetails,
		};

		try {
			// First, create the delivery advice note record
			const response = await axios.post(
				"http://192.168.8.117:3000/api/deliveryAdviceNotes/create",
				deliveryAdviceNote,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 201) {
				// Successfully submitted the Delivery Advice Note
				// Proceed to update the driver's status
				try {
					if (selectedDriverId) {
						const updatedDriver = {
							driverStatus: "Unavailable",
						};

						await axios.put(
							`http://192.168.8.117:3000/api/drivers/update/${selectedDriverId}`,
							updatedDriver
						);

						// Driver status updated successfully
					}
				} catch (error) {
					// Handle errors when updating driver status
					console.error("Error updating driver status:", error);
				}
			} else {
				// Handle errors or display error messages
				console.error("Error submitting the Delivery Advice Note");
			}
		} catch (error) {
			// Handle network errors or other exceptions
			console.error("An error occurred:", error);
		}
	};

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
							<Picker.Item label="Select Order ID" value="" />
							{fetchedOrderNumbers.map((order, index) => (
								<Picker.Item
									label={order.orderNumber.toString()}
									value={order.orderNumber.toString()}
									key={index}
								/>
							))}
						</Picker>
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
							selectedValue={selectedDriverId}
							onValueChange={(itemValue) =>
								setSelectedDriverId(itemValue)
							}
							style={styles.picker}
						>
							<Picker.Item
								label="Select Assigned Driver Name"
								value=""
							/>
							{fetchedDrivers.map((driver, index) => (
								<Picker.Item
									label={driver.driverName}
									value={driver._id} // Assuming "_id" is the MongoDB ID of the driver
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
		marginTop: 130,
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
