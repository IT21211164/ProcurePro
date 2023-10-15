import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import FooterTabs from "../component/Nav/footertabs";
import axiosInstance from "./api/axios";

import { useNavigation, useRoute } from "@react-navigation/native";

const OrderScreen = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#FFC436",
            height: 150, // Set the height to your desired value
        },
    });
    
    const navigation = useNavigation();
    
    const navigateToOrderDetails = () => {
        navigation.navigate("OrderDetailsScreen");
    };
    



    const styles1 = StyleSheet.create({
        container: {
            backgroundColor: "#FFF",
            marginTop: -45,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 800,
            paddingTop: 25,
        },
    });

    const styles2 = StyleSheet.create({
        container: {
            backgroundColor: "#F6F1F1",
            marginTop: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            height: 150,
            width: 200,
            padding: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            
        },
    });

    const styles3 = StyleSheet.create({
        container: {
            backgroundColor: "white",
            marginTop: 4,
            borderRadius: 5,
            marginHorizontal: 20,
            height: 70,
            width: 320,
            padding: 10,
            paddingLeft: 20,
            marginBottom: 4,
            
            
        },
    });

    const styles4 = StyleSheet.create({
        site: {
            fontSize:14,
            padding: 2,
            color:"#696969"
            

        },
        amount: {
            fontSize:18,
            padding: 2,
            fontWeight: "500"
            

        },

        status: {
            textAlign:"right",
            marginTop:-48,
            marginEnd:20,
            color:"green",
            fontSize:16,
            fontWeight:"500"
          

        },

        rejectstatus:{
            textAlign:"right",
            marginTop:-48,
            marginEnd:20,
            color:"#708090",
            fontSize:16,
            fontWeight:"500"
            
        }
    });

    const styles5 =StyleSheet.create({
        column:{
            backgroundColor: "white",
            marginTop: 0,
            borderRadius: 5,
            marginLeft: 3,
            height: 40,
            width: 105,
            paddingTop:10,
            marginBottom: -10,
            backgroundColor:"#f7d76e"
        },
        text:{
            textAlign:"center",
            fontWeight:"500"
        }
    })

   
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("Approved");

    /*function getOrders(){
        axios.get(`http://localhost:3000/orders/displayorders/${status}`).then((res)=>{
            console.log(res.data);
        setOrders(res.data);
        }).catch((err)=>{
            alert("sssd");
        })
    }

    useEffect(()=>{
        getOrders();
    }, [])


    const getOrders = async(e) => {

        const response = await axiosInstance.post(`/orders/displayorders/${status}`).then((res)=>{
            setOrders(res.data);
            }).catch((err)=>{
                alert("No oders");
            })
        console.log(response.data);
    
      }
    
      useEffect(()=>{
        getOrders();
      }, [])*/


    return (
        <View style={{ height: "100%", backgroundColor:"#DCDCDC"}}>
            
           
                
                <View>
                <Text style={{
                    fontSize: 28,
                    marginHorizontal: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 40,
                    marginBottom:15,
                    fontWeight:"bold"
                }}>
                    Order List
                </Text>
                </View>
              
                    {/*}
                    <FlatList 
                            data={orders}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => (
                            <View>
                                <Text>{item.siteLocation}</Text>
                                <Text>{item.totalAmount}</Text>
                               
                            </View>
                            )}
                    />*/}

            <View style={{flexDirection: 'row', marginLeft:17}}>
                <TouchableOpacity style={styles5.column}>
                    <Text style={styles5.text}>All Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles5.column}>
                    <Text style={styles5.text}>Accepted</Text>   
                </TouchableOpacity>
                <TouchableOpacity style={styles5.column}> 
                    <Text style={styles5.text}>Rejected</Text>
                </TouchableOpacity>
            </View>
                
            <View style={{ height: 400 , padding :20 , alignItems:"center"}}>
                
                <TouchableOpacity style={styles3.container} onPress={navigateToOrderDetails}>
                    <Text style={styles4.amount}>126000.00</Text>
                    <Text style={styles4.site}>Colombo</Text>   

                    <Text style={styles4.status}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles3.container}>
                    <Text style={styles4.amount}>250000.00</Text>
                    <Text style={styles4.site}>Galle</Text>   

                    <Text style={styles4.status}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles3.container}>
                    <Text style={styles4.amount}>98000.00</Text>
                    <Text style={styles4.site}>Malabe</Text>   

                    <Text style={styles4.rejectstatus}>Rejected</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles3.container}>
                    <Text style={styles4.amount}>244000.00</Text>
                    <Text style={styles4.site}>Kandy</Text>   

                    <Text style={styles4.status}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles3.container}>
                    <Text style={styles4.amount}>97000.00</Text>
                    <Text style={styles4.site}>Matara</Text>   

                    <Text style={styles4.status}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles3.container}>
                    <Text style={styles4.amount}>195000.00</Text>
                    <Text style={styles4.site}>Gampaha</Text>   

                    <Text style={styles4.status}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles3.container}>
                    <Text style={styles4.amount}>153000.00</Text>
                    <Text style={styles4.site}>Matara</Text>   

                    <Text style={styles4.status}>Accepted</Text>
                </TouchableOpacity>

               
            </View>
      

            <SafeAreaView style={{
                flex: 1,
                justifyContent: "space-between",
                position: "absolute",
                bottom: 0,
                width: "100%",

            }}>
                <FooterTabs />
            </SafeAreaView>
        </View>
    );
}

export default OrderScreen;
