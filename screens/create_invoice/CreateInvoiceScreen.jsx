import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./createinvoice.style";
import FooterTabs from "../../component/Nav/footertabs";
import UserInputs from "../../component/signUp_userInputs/userInputs";
import CreateInvoiceConfirmationScreen from './CreateInvoiceConfirmationScreen';

const CreateInvoiceScreen = () => {

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formatedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  
    const [billFrom, setBillFrom] = useState("");
    const [billTo , setBillTo] = useState("");
    const [date , setDate] = useState(formatedDate);

    const route = useRoute();
    const orderNo = route.params.orderId;
    const totalAmount = route.params.totalAmount;
    const siteLocation = route.params.siteLocation;
    const item = route.params.item;
    const qty = route.params.qty;
    const price = route.params.price;

    const invoiceFormHandler = async(e) => {
 
        axios.post("http://192.168.8.100:3000/api/invoice/addInvoice", {date,orderNo,billFrom,billTo,siteLocation,totalAmount})
        .then((res) => {
            if(res.data){
                alert('Invoice created')
              }
              else{
                alert('something went wrong') 
            }
        })
    }




    //Handle Confirmation Screen
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);   
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
  
    const handleConfirm = () => {
        invoiceFormHandler();
        closeModal();
    };


    return (
        <View style={{ height: "100%", backgroundColor:"#DCDCDC"}}>
            
           
            <Text style={{alignSelf:"center", padding:12, marginTop:20, marginBottom:10, fontSize:24, fontWeight:"500"}}>Create Invoice</Text>
            <ScrollView>
                
                <View style={{backgroundColor:"white", padding:8, marginLeft:15, marginRight:15, borderRadius:10}}>
                    < UserInputs name = "Date" value = {formatedDate} setValue = {setDate} />
                    < UserInputs name = "Bill From" value = {billFrom} setValue = {setBillFrom} />
                    < UserInputs name = "Bill To" value = {billTo} setValue = {setBillTo}  />
                </View>

                <View style={{backgroundColor:"white", padding:12, margin:15,marginTop:8,marginBottom:8, borderRadius:10}}>
                    <Text style={{fontWeight:"500", fontSize:15}}>Order Information</Text>

                    

                    <View style={{flexDirection:'row', padding:10, alignSelf: "center"}}>
                        <Text style={{marginTop:10, marginRight:14, fontWeight:"500"}}>Ref No</Text>
                        <Text style={{marginTop:10, marginLeft:45, fontWeight:"500"}}>{orderNo}</Text>
                    </View>

                    <View style={{flexDirection:'row', padding:10, alignSelf: "center"}}>
                        <Text style={{marginTop:10, marginRight:14}}>Item</Text>
                        <Text style={{marginTop:10, marginLeft:150}}>Quantity</Text>
                        <Text style={{marginTop:10, marginLeft:14}}>Price</Text>
                    </View>


                    <View style={{flexDirection:'row', padding:10, marginTop:5, backgroundColor:"#FFFAF0", width:310}}>
                        <Text style={{marginTop:10,width:140}}>{item}</Text>

                        <View  style={{flexDirection:'row',marginTop:0,end:-55,  alignSelf:"flex-end"}}>
                            <Text style={{marginTop:10, marginRight:46}}>{qty}</Text>
                            <Text style={{marginTop:10}}>{price}</Text>
                        </View>
                    </View>

                </View>
              
                <View style={{flexDirection:'row', padding:12, marginTop:0, backgroundColor:"white", margin:15, borderRadius:10}}>
                    <Text style={{fontSize:16, fontWeight:"400"}}>Total Amount</Text>
                    <Text style={{marginLeft:130, fontSize:16, fontWeight:"500"}}>{totalAmount}.00</Text>
                </View>

                
                <TouchableOpacity  style={{backgroundColor:"#f6d155", alignSelf:"center", padding:10, borderRadius:5, marginTop:10,marginBottom:80}}  onPress={openModal}>
                    <View>
                        <Text style={{fontSize:17, fontWeight:"500"}}>
                            Submit Invoice
                        </Text>
                    </View>
                </TouchableOpacity>
                
            </ScrollView>

            
            <CreateInvoiceConfirmationScreen
                    isVisible={isModalVisible}
                    message= "You are about to submit the invoice. Are you sure you want to submit?"
                    onCancel={closeModal}
                    onConfirm={handleConfirm}
            />
          
      

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
