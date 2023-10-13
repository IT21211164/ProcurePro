import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./screens/signIn";
import SiteManagerHomeScreen from "./screens/siteManagerHomeScreen";
import SupplierHomeScreen from "./screens/supplierHomeScreen";
import notificationScreen from "./screens/notificationScreen";
import OrderScrren from "./screens/orderScreen";
import SiteScreen from "./screens/sitesScreen";
import SiteInfo from "./screens/siteInfo";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
<NavigationContainer>


  <Stack.Navigator initialRouteName="SiteManagerHomeScreen" screenOptions={{headerShown: false}}>

    <Stack.Screen name = "SignIn" component = {SignIn} />
    <Stack.Screen name = "SiteManagerHomeScreen" component = {SiteManagerHomeScreen} />
    <Stack.Screen name = "SupplierHomeScreen" component = {SupplierHomeScreen} />
    <Stack.Screen name = "notificationScreen" component = {notificationScreen} />
    <Stack.Screen name = "OrderScrren" component = {OrderScrren} />
    <Stack.Screen name = "SiteScreen" component = {SiteScreen} />
    <Stack.Screen name = "SiteInfo" component = {SiteInfo} />

  </Stack.Navigator>

</NavigationContainer>
);

   
}


