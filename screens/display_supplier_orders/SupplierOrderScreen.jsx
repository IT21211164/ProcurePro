import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';

import FooterTabs from "../../component/Nav/footertabs";
import styles from "./supplierorders.style";


const SupplierOrderScreen = () => {

    const navigation = useNavigation();

    
    const navigateToOrderDetails = (orderId,totalAmount,siteLocation,status) => {
        navigation.navigate("OrderDetailsScreen", {orderId,totalAmount,siteLocation,status});
    };




   
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("Not Approved");

    function getOrders(){
        axios.get(`http://192.168.8.101:3000/api/orders/displayorders?status_ne=${status}`).then((res)=>{
            console.log(res.data);
            setOrders(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }

    useEffect(()=>{
        getOrders();
    }, [])

    useFocusEffect(
        React.useCallback(() => {
          getOrders();
        }, [])
    );


    return (
        <View style={{ height: "100%", backgroundColor:"#DCDCDC"}}>
                
            <View>
                <Text style={styles.header}>Order List</Text>
            </View>
              
            <View style={{flexDirection: 'row', marginLeft:17}}>
                <TouchableOpacity style={styles.column}>
                    <Text style={styles.columntext}>All Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.column}>
                    <Text style={styles.columntext}>Accepted</Text>   
                </TouchableOpacity>
                <TouchableOpacity style={styles.column}> 
                    <Text style={styles.columntext}>Rejected</Text>
                </TouchableOpacity>
            </View>
                
            <View style={{ height: 400 , padding :20 , alignItems:"center"}}>

                <FlatList 
                        data={orders.slice().reverse()}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (

                    <TouchableOpacity style={styles.ordercontainer} onPress={()=>navigateToOrderDetails(item._id, item.totalAmount,item.siteLocation,item.status)}>
                            
                        <Text style={styles.amount}>{item.totalAmount}.00</Text>
                        <Text style={styles.site}>{item.siteLocation}</Text>
                        <Text style={item.status == "Accepted" ? styles.acceptstatus: styles.rejectstatus }>{item.status == "Placed" ? "" : item.status}</Text>

                    </TouchableOpacity>

                )}
                />      
                
            </View>   
      

            <SafeAreaView style={styles.footertab}>
                <FooterTabs />
            </SafeAreaView>
        </View>
    );
}

export default SupplierOrderScreen;