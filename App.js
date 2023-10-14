import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./screens/signIn";
import SiteManagerHomeScreen from "./screens/siteManagerHomeScreen";
import SupplierHomeScreen from "./screens/supplierHomeScreen"
import OrderScreen from "./screens/orderScreen"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
<NavigationContainer>


  <Stack.Navigator initialRouteName="SupplierHomeScreen" screenOptions={{headerShown: false}}>

    <Stack.Screen name = "SignIn" component = {SignIn} />
    <Stack.Screen name = "SiteManagerHomeScreen" component = {SiteManagerHomeScreen} />
    <Stack.Screen name = "SupplierHomeScreen" component = {SupplierHomeScreen} />
    <Stack.Screen name = "OrderScreen" component = {OrderScreen} />

  </Stack.Navigator>

</NavigationContainer>
);

   
}


