import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import { useNavigation, useRoute } from "@react-navigation/native"; // Import the navigation hook

const FooterTab = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isActive = (screenName) => {
    return route.name === screenName;
  };

  const tabStyle = (screenName) => {
    return isActive(screenName) ? { color: "#FFC436" } : {};
  };

  const navigateToHome = () => {
    navigation.navigate("SupplierHomeScreen");
  };

  const navigateToSites = () => {
    navigation.navigate("SiteScreen");
  };

  const navigateToOrders = () => {
    navigation.navigate("OrderScreen");
  };

  const navigateToNotifications = () => {
    navigation.navigate("notificationScreen");
  };

  return (
    <>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor:"#f7d76e",
          padding:30,
          paddingEnd: 20,
          paddingBottom: 2,
          paddingTop:15
        }}
      >
        <TouchableOpacity onPress={navigateToHome}>
          <>
            <Image source={require("../../assets/home.png")}
               style = {{width : 30 , height: 30, alignSelf: "center"}}
             ></Image>
            <Text style={{ fontSize: 16, alignSelf: "center", ...tabStyle("SiteManagerHomeScreen") }}>Home</Text>
          </>
        </TouchableOpacity>


        <TouchableOpacity onPress={navigateToOrders} style = {{marginLeft:15}}>
          <>
            <Image source={require("../../assets/order.png")}
               style = {{width : 30 , height: 30, alignSelf: "center"}}
            ></Image>
            <Text style={{ fontSize: 16, alignSelf: "center", ...tabStyle("OrderScrren") }}>Orders</Text>
          </>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToNotifications}>
          <>
            <Image source={require("../../assets/notification.png")}
               style = {{width : 30 , height: 30, alignSelf: "center"}}
            ></Image>
            <Text style={{ fontSize: 16, alignSelf: "center", ...tabStyle("notificationScreen") }}>Notifications</Text>
          </>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FooterTab;
