import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Divider } from "react-native-elements";
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
      <Divider width={1} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor:"white",
          padding:12
        }}
      >
        <TouchableOpacity onPress={navigateToHome}>
          <>
            <FontAwesome
              name="home"
              size={30}
              style={{ marginBottom: 3, alignSelf: "center", ...tabStyle("SiteManagerHomeScreen") }}
            />
            <Text style={{ fontSize: 16, alignSelf: "center", ...tabStyle("SiteManagerHomeScreen") }}>Home</Text>
          </>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSites}>
          <>
            <FontAwesome
              name="sitemap"
              size={30}
              style={{ marginBottom: 3, alignSelf: "center", ...tabStyle("SiteScreen") }}
            />
            <Text style={{ fontSize: 16, alignSelf: "center", ...tabStyle("SiteScreen") }}>Sites</Text>
          </>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToOrders}>
          <>
            <FontAwesome
              name="box"
              size={30}
              style={{ marginBottom: 3, alignSelf: "center", ...tabStyle("OrderScrren") }}
            />
            <Text style={{ fontSize: 16, alignSelf: "center", ...tabStyle("OrderScrren") }}>Orders</Text>
          </>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToNotifications}>
          <>
            <FontAwesome
              name="bell"
              size={30}
              style={{ marginBottom: 3, alignSelf: "center", ...tabStyle("notificationScreen") }}
            />
            <Text style={{ fontSize: 16, alignSelf: "center", ...tabStyle("notificationScreen") }}>Notification</Text>
          </>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FooterTab;
