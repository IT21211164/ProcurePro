import React from "react";
import {SafeAreaView , Image , Text} from "react-native";
import FooterTabs from "../component/Nav/footertabs";

const OrderScreen = () => (
    <>
       
           <SafeAreaView style = {{
            flex: 1, justifyContent: "space-between",position: "absolute", bottom: 0, width: "100%"
           }}>
            
            <FooterTabs></FooterTabs>
            </SafeAreaView>
            </>
    );

export default OrderScreen;