import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import FooterTabs from "../component/Nav/footertabs";
import axiosInstance from "./api/axios";

import { useNavigation, useRoute } from "@react-navigation/native";

const NewOrderDetailsScreen = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#FFC436",
            height: 150, // Set the height to your desired value
        },
    });
    const navigation = useNavigation();

    const navigateToInvoiceScreen = () => {
        navigation.navigate("CreateInvoiceScreen");
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
            
           
                
                <View style={{backgroundColor:"white", padding:12}}>
                    <Text style={{
                        fontSize: 20,
                        justifyContent: "center",
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom:10,
                        fontWeight:"bold",
                        color:"green"
                    }}>
                     
                    </Text>

                    <Text style={{fontSize: 15,alignSelf: "center",marginBottom:10,fontWeight:"bold", color:"#808080", fontWeight:"400"}}>Ref No : 652bee94cdf8b6e6f8ee88f7</Text>

                    <Text style={{fontSize: 15,alignSelf: "center",marginBottom:10,fontWeight:"bold", color:"#778899", fontWeight:"400"}}>06.10.2023</Text>

                    <View style={{flexDirection:'row', alignSelf: "center"}}>
                        <Text style={{alignSelf: "center", color:"#778899"}}>Site Location  : Galle</Text>
                    </View>
                </View>

                <View style={{backgroundColor:"white", padding:12, margin:15, borderRadius:10}}>
                    <Text style={{fontWeight:"500", fontSize:15}}>Order Items Information</Text>
                    <View style={{flexDirection:'row', padding:10, alignSelf: "center"}}>
                        <Text style={{marginTop:10, marginRight:14}}>Item</Text>
                        <Text style={{marginTop:10, marginLeft:150}}>Quantity</Text>
                        <Text style={{marginTop:10, marginLeft:14}}>Price</Text>
                    </View>


                    <View style={{flexDirection:'row', padding:10, marginTop:10, backgroundColor:"#FFFAF0", width:310}}>
                        <Text style={{marginTop:10,width:140}}>Holcim Cement (50kg)</Text>

                        <View  style={{flexDirection:'row',marginTop:0,end:-55,  alignSelf:"flex-end"}}>
                            <Text style={{marginTop:10, marginRight:46}}>60</Text>
                            <Text style={{marginTop:10}}>1400</Text>
                        </View>
                    </View>


                    <View style={{flexDirection:'row', padding:10, marginTop:10, backgroundColor:"#FFFAF0", width:310}}>
                        <Text style={{marginTop:10,width:140}}>Melwa Steel Bars</Text>

                        <View  style={{flexDirection:'row',marginTop:0,end:-55,  alignSelf:"flex-end"}}>
                            <Text style={{marginTop:10, marginRight:46}}>5</Text>
                            <Text style={{marginTop:10}}>23500</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', padding:10, marginTop:10, backgroundColor:"#FFFAF0"}}>
                        <Text style={{marginTop:10, width:140}}>Red Bricks</Text>

                        <View  style={{flexDirection:'row',marginTop:0, end:-55}}>
                            <Text style={{marginTop:10, marginRight:46}}>300</Text>
                            <Text style={{marginTop:10}}>80</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', padding:10, marginTop:10, backgroundColor:"#FFFAF0"}}>
                        <Text style={{marginTop:10, width:140}}>Rhino Roofing Sheet</Text>

                        <View  style={{flexDirection:'row',marginTop:0, end:-55}}>
                            <Text style={{marginTop:10, marginRight:46}}>20</Text>
                            <Text style={{marginTop:10}}>1150</Text>
                        </View>
                    </View>

                </View>
              
                <View style={{flexDirection:'row', padding:12, marginTop:4, backgroundColor:"white", margin:15, borderRadius:10}}>
                    <Text style={{fontSize:16, fontWeight:"400"}}>Total Amount</Text>
                    <Text style={{marginLeft:130, fontSize:16, fontWeight:"500"}}>248500.00</Text>
                </View>

                <View style={{flexDirection:'row', alignSelf:"center"}}>
                    <TouchableOpacity  style={{backgroundColor:"#f6d155", padding:10, borderRadius:5, margin:10, width:80}}>
                        <View>
                            <Text style={{fontSize:17, fontWeight:"500", alignSelf:"center"}}>
                                Accept
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{backgroundColor:"#f6d155", padding:10, borderRadius:5, margin:10, width:80}}>
                        <View>
                            <Text style={{fontSize:17, fontWeight:"500", alignSelf:"center"}}>
                                Reject
                            </Text>
                        </View>
                    </TouchableOpacity>
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

export default NewOrderDetailsScreen;
