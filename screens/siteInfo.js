import React from "react";
import {View , Image , Text, StyleSheet , ImageBackground , ScrollView , Dimensions , TouchableOpacity , SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PlaceOrder from "../component/signUp_userInputs/placeOrder";
import FooterTabs from "../component/Nav/footertabs";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFC436",
        height: 150, // Set the height to your desired value
    },
});

const styles1 = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        margin:10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 800,
        paddingTop: 25,
        alignSelf:"center"
    },
});

const styles2 = StyleSheet.create({
    container: {
        backgroundColor: "#fff9c4",
        marginTop: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        height: 100,
        width: 160,
        padding: 5,
        shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
        
    },
});

const SignInImage = () => {
    return (
        <View>
        <ScrollView style = {{
            backgroundColor : "#FFF"
        }}>
            <ImageBackground  source = {require("../assets/bg_photo.jpg")}
            style = {{
                height:0.33 * h
            }}>

            
            <LinearGradient  colors = {["rgba(255, 255, 255, 1)" , "transparent"]}
            style = {{
                transform: [{rotate:"180deg"}],
                position:"absolute",
                left:0,
                bottom:0,
                zindex:1,
                height:0.16*h,
                width:w
            }}
            >
                <Text style = {
                    {
                        transform: [{rotate:"-180deg"}],
                        color: "#FFF",
                        fontSize:35,
                        marginVertical:50,
                        alignSelf:"center",
                        fontWeight: 'bold'
                        
                    }
                }>
                    One Gallface   
                </Text>
            </LinearGradient>
            </ImageBackground>

            <View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                paddingHorizontal:20,
                paddingTop:20
            }}>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text style = {{
                        fontSize:30,
                        color:"black",
                        alignSelf: "center"
                    }}>
                        S-14
                    </Text>
                    <Text style = {{
                        fontSize:16,
                        color:"black",
                        alignSelf: "center"
                    }}>
                        Site ID
                    </Text>

                </View>

                <View style={{
                    alignItems: "center"
                }}>
                    <Text style = {{
                        fontSize:30,
                        color:"black",
                        alignSelf: "center"
                    }}>
                        Colombo
                    </Text>
                    <Text style = {{
                        fontSize:16,
                        color:"black",
                        alignSelf: "center"
                    }}>
                        Location
                    </Text>

                </View>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text style = {{
                        fontSize:30,
                        color:"black"
                    }}>
                        46
                    </Text>
                    <Text style = {{
                        fontSize:16,
                        color:"black"
                    }}>
                        Employees
                    </Text>

                </View>
            </View>
            
            <View style={styles1.container}>
                
                <View style={{ height: 130 , marginHorizontal:10}}>
                <View
                    
                    style={{ margin: 0, marginRight: 0 , flexDirection:"row",}}
                >
                    <TouchableOpacity style={styles2.container} >
                        <Text style={{
                    fontSize: 20,
                    marginHorizontal: 15,
                    alignSelf:"center"
                }}>Orders</Text>
                <FontAwesome 
                name = "shopping-cart"
                size={40}
                style ={{
                    alignSelf: "center",
                    marginTop:10
                }}>

                </FontAwesome>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.container}>
                        <Text style={{
                    fontSize: 20,
                    marginHorizontal: 15,
                    alignSelf:"center"
                }}>Suppliers</Text>
                <FontAwesome 
                name = "truck"
                size={40}
                style ={{
                    alignSelf: "center",
                    marginTop:10
                }}>

                </FontAwesome>
                    </TouchableOpacity>
                    
                </View>
                </View>

                <View style={{ height: 100 , marginHorizontal:10}}>
                <View
                    
                    style={{ margin: 0, marginRight: 0 , flexDirection:"row",}}
                >
                    <TouchableOpacity style={styles2.container} >
                        <Text style={{
                    fontSize: 20,
                    marginHorizontal: 15,
                    alignSelf:"center"
                }}>Invoices</Text>
                <FontAwesome 
                name = "money-check-alt"
                size={40}
                style ={{
                    alignSelf: "center",
                    marginTop:10
                }}>

                </FontAwesome>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.container}>
                        <Text style={{
                    fontSize: 20,
                    marginHorizontal: 15,
                    alignSelf:"center"
                }}>Credit Notes</Text>
                <FontAwesome 
                name = "credit-card"
                size={40}
                style ={{
                    alignSelf: "center",
                    marginTop:10
                }}>

                </FontAwesome>
                    </TouchableOpacity>
                    
                </View>
                </View>

                <PlaceOrder />
                <FooterTabs />
                </View>
                
                </View>
                
        </ScrollView>
        
        </View>
        
        


    );
    };

export default SignInImage;