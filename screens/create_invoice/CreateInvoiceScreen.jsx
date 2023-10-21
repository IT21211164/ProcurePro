import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./createinvoice.style";
import FooterTabs from "../../component/Nav/footertabs";
import UserInputs from "../../component/signUp_userInputs/userInputs";

const CreateInvoiceScreen = () => {
    
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("Approved");

  
    const [from, setFrom] = useState("");
    const [to , setTo] = useState("");

    const route = useRoute();
    const orderId = route.params.orderId;
    const totalAmount = route.params.totalAmount;
    const siteLocation = route.params.siteLocation;

    return (
        <View style={{ height: "100%", backgroundColor:"#DCDCDC"}}>
            
           
            <Text style={{alignSelf:"center", padding:12, marginTop:20, marginBottom:10, fontSize:24, fontWeight:"500"}}>Create Invoice</Text>
            <ScrollView>
                <View style={{backgroundColor:"white", padding:8, marginLeft:15, marginRight:15, borderRadius:10}}>
                    < UserInputs name = "Bill From" value = {from} setValue = {setFrom} />
                    < UserInputs name = "Bill To" value = {to} setValue = {setTo}  />
                </View>

                <View style={{backgroundColor:"white", padding:12, margin:15,marginTop:8,marginBottom:8, borderRadius:10}}>
                    <Text style={{fontWeight:"500", fontSize:15}}>Order Information</Text>

                    <View style={{flexDirection:'row', padding:10, alignSelf: "center"}}>
                        <Text style={{marginTop:10, marginRight:14, fontWeight:"500"}}>Ref No</Text>
                        <Text style={{marginTop:10, marginLeft:45, fontWeight:"500"}}>652b2a321242575ba196916e</Text>
                    </View>

                    <View style={{flexDirection:'row', padding:10, alignSelf: "center"}}>
                        <Text style={{marginTop:10, marginRight:14}}>Item</Text>
                        <Text style={{marginTop:10, marginLeft:150}}>Quantity</Text>
                        <Text style={{marginTop:10, marginLeft:14}}>Price</Text>
                    </View>


                    <View style={{flexDirection:'row', padding:10, marginTop:5, backgroundColor:"#FFFAF0", width:310}}>
                        <Text style={{marginTop:10,width:140}}>Holcim Cement (50kg)</Text>

                        <View  style={{flexDirection:'row',marginTop:0,end:-55,  alignSelf:"flex-end"}}>
                            <Text style={{marginTop:10, marginRight:46}}>70</Text>
                            <Text style={{marginTop:10}}>1400</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', padding:10, marginTop:5, backgroundColor:"#FFFAF0"}}>
                        <Text style={{marginTop:10, width:140}}>Red Bricks</Text>

                        <View  style={{flexDirection:'row',marginTop:0, end:-55}}>
                            <Text style={{marginTop:10, marginRight:46}}>95</Text>
                            <Text style={{marginTop:10}}>80</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', padding:10, marginTop:5, backgroundColor:"#FFFAF0"}}>
                        <Text style={{marginTop:10, width:140}}>Rhino Roofing Sheet</Text>

                        <View  style={{flexDirection:'row',marginTop:0, end:-55}}>
                            <Text style={{marginTop:10, marginRight:46}}>20</Text>
                            <Text style={{marginTop:10}}>1150</Text>
                        </View>
                    </View>

                </View>
              
                <View style={{flexDirection:'row', padding:12, marginTop:0, backgroundColor:"white", margin:15, borderRadius:10}}>
                    <Text style={{fontSize:16, fontWeight:"400"}}>Total Amount</Text>
                    <Text style={{marginLeft:130, fontSize:16, fontWeight:"500"}}>128600.00</Text>
                </View>

                
                <TouchableOpacity  style={{backgroundColor:"#f6d155", alignSelf:"center", padding:10, borderRadius:5, marginTop:10,marginBottom:80}}>
                    <View>
                        <Text style={{fontSize:17, fontWeight:"500"}}>
                            Submit Invoice
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text>c</Text>
            </ScrollView>
          
      

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

export default CreateInvoiceScreen;
