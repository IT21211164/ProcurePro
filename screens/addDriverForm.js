import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddDriverForm() {
	const [driverName, setDriverName] = useState("");
	const [driverNIC, setDriverNIC] = useState("");
	const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
	const [driverPhoneNumber, setDriverPhoneNumber] = useState("");

	const handleSubmit = async () => {
		// Create a new driver object
		const driver = {
			driverName,
			driverNIC,
			driverLicenseNumber,
			driverPhoneNumber,
		};

		try {
			const response = await fetch("http://localhost:3000/api/drivers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(driver),
			});

			if (response.ok) {
				// Successfully added the driver
			} else {
				// display error message in log
				console.error("Error adding the driver");
			}
		} catch (error) {
			// Handle exceptions
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
				<Text style={styles.headerText}>Add New Driver</Text>
			</View>
			<View style={styles.form}>
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
						<TextInput
							style={styles.input}
							value={driverName}
							onChangeText={(text) => setDriverName(text)}
							placeholder="Enter Driver Name"
						/>
					</View>
				</View>
				<View style={styles.formGroup}>
					<View style={styles.labelContainer}>
						<Icon
							name="badge-account-outline"
							size={20}
							style={styles.icon}
						></Icon>
						<Text style={styles.label}>Driver NIC</Text>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							value={driverNIC}
							onChangeText={(text) => setDriverNIC(text)}
							placeholder="Enter Driver NIC"
						/>
					</View>
				</View>
				<View style={styles.formGroup}>
					<View style={styles.labelContainer}>
						<Icon
							name="badge-account-horizontal-outline"
							size={20}
							style={styles.icon}
						></Icon>
						<Text style={styles.label}>Driver License Number</Text>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							value={driverLicenseNumber}
							onChangeText={(text) =>
								setDriverLicenseNumber(text)
							}
							placeholder="Enter License Number"
						/>
					</View>
				</View>
				<View style={styles.formGroup}>
					<View style={styles.labelContainer}>
						<Icon
							name="phone-in-talk-outline"
							size={20}
							style={styles.icon}
						></Icon>
						<Text style={styles.label}>Driver Phone Number</Text>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							value={driverPhoneNumber}
							onChangeText={(text) => setDriverPhoneNumber(text)}
							placeholder="Enter Phone Number"
						/>
					</View>
				</View>
				<TouchableOpacity
					style={styles.submitBtn}
					onPress={handleSubmit}
				>
					<Text style={styles.submitText}>Add Driver</Text>
				</TouchableOpacity>
			</View>
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
		marginBottom: 15,
	},
	input: {
		height: 40,
		padding: 8,
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
		marginTop: 260,
	},
	submitText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "black",
	},
});
