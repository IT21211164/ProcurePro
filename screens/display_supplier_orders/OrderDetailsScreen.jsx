import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import FooterTabs from "../../component/Nav/footertabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./supplierorders.style";
import AcceptRejectConfirmationScreen from './AcceptRejectConfirmationScreen';

const OrderDetailsScreen = () => {

    const navigation = useNavigation();

    const navigateToInvoiceScreen = (orderId,item,qty,price,totalAmount,siteLocation) => {
        navigation.navigate("CreateInvoiceScreen", {orderId,item,qty,price,totalAmount,siteLocation});
    };

    const [orders, setOrders] = useState([]);    

    const route = useRoute();
    const orderId = route.params.orderId;
    const totalAmount = route.params.totalAmount;
    const siteLocation = route.params.siteLocation;
    const item = route.params.item;
    const qty = route.params.qty;
    const price = route.params.price;
    const [orderStatus, setOrderStatus] = useState(route.params.status);
    const [btn, setBtn] = useState("");
    const [updateForm, setUpdateForm] = useState(false);

    //update order status function
    const updateFormHandler = async(e) => {

        axios.put(`http://192.168.8.100:3000/api/orders/updateorderstatus/${orderId}`, {orderStatus})
        .then((res) => {
            if(res.data){
                if(orderStatus == "Accepted")
                    alert('Order Accepted')
                else
                alert('Order Rejected')
            }
              else{
                alert('something went wrong') 
            }
        })
    }


    //Handle Confirmation Screen
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = (btnname) => {
      setModalVisible(true);
      setBtn(btnname);
    
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
  
    const handleConfirm = () => {
        setOrderStatus(btn);
        setUpdateForm(true);
        closeModal();
    };

    useEffect(() => {
        if (updateForm) {
            updateFormHandler();
            setUpdateForm(false); // Reset the flag
        }
    }, [updateForm]);



    return (
        <View style={{ height: "100%", backgroundColor:"#DCDCDC"}}>
            
           
                
                <View style={{backgroundColor:"white", padding:18}}>
                    <Text style={orderStatus == "Accepted" ? styles.orderStatusAccept : styles.orderStatusReject}>
                        {orderStatus == "Placed" ? "": `Order ${orderStatus}`}
                    </Text>

                    <Text style={styles.topData}>Ref No : {orderId}</Text>

                    <Text style={styles.topData}>06.10.2023</Text>

                    <Text style={styles.topData}>Site Location  : {siteLocation}</Text>

                </View>

            <ScrollView style={{marginBottom:80}}>  
                <View style={styles.itemHeader}>
                    <Text style={{fontWeight:"500", fontSize:16}}>Order Items Information</Text>
                    <View style={{flexDirection:'row', padding:10, alignSelf: "center"}}>
                        <Text style={{marginTop:10, marginRight:14, fontSize:15}}>Item</Text>
                        <Text style={{marginTop:10, marginLeft:150, fontSize:15}}>Quantity</Text>
                        <Text style={{marginTop:10, marginLeft:14, fontSize:15}}>Price</Text>
                    </View>


                    <View style={styles.itemRow}>
                        <Text style={{marginTop:10,width:140, fontSize:15}}>{item}</Text>

                        <View  style={{flexDirection:'row',marginTop:0,end:-55,  alignSelf:"flex-end"}}>
                            <Text style={{marginTop:10, marginRight:46, fontSize:15}}>{qty}</Text>
                            <Text style={{marginTop:10, fontSize:15}}>{price}</Text>
                        </View>
                    </View>


                </View>
              
                <View style={styles.totalAmountRow}>
                    <Text style={{fontSize:16, fontWeight:"400"}}>Total Amount</Text>
                    <Text style={{marginLeft:125, fontSize:17, fontWeight:"500"}}>{totalAmount}.00</Text>
                </View>

                {orderStatus == "Accepted" ? 
                <View>
                <TouchableOpacity onPress={() => navigateToInvoiceScreen(orderId,item,qty,price,totalAmount,siteLocation)} style={{backgroundColor:"#f6d155", alignSelf:"center", padding:10, borderRadius:5, marginTop:10}}>
                    <View>
                        <Text style={{fontSize:17, fontWeight:"500"}}>
                            Create Invoice
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
                :
                orderStatus=="Rejected" ? ""
                :
                <View style={{flexDirection:'row', alignSelf:"center"}}>
                    <TouchableOpacity style={styles.acc_rej_btn} onPress={()=>openModal('Accepted')}>
                        <View>
                            <Text style={styles.btntext}>
                                Accept
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acc_rej_btn} onPress={()=>openModal('Rejected')}>
                        <View>
                            <Text style={styles.btntext}>
                                Reject
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                }
            </ScrollView>
                

                <AcceptRejectConfirmationScreen
                    isVisible={isModalVisible}
                    message={btn == "Accepted" ? "Once you accept the order you cannot reverse your decision. Are you sure you want to accept the order?" : 
                    "Once you reject the order you cannot reverse your decision. Are you sure you want to reject the order?"}
                    onCancel={closeModal}
                    onConfirm={handleConfirm}
                />


            <SafeAreaView style={styles.footertab}>
                <FooterTabs />
            </SafeAreaView>
        </View>
    );
}

export default OrderDetailsScreen;
