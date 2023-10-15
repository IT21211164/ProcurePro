import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./screens/signIn";
import SiteManagerHomeScreen from "./screens/siteManagerHomeScreen";
import SupplierHomeScreen from "./screens/SupplierHomeScreen"
import OrderScreen from "./screens/OrderScreen"
import OrderDetailsScreen from "./screens/OrderDetailsScreen"
import CreateInvoiceScreen from "./screens/CreateInvoiceScreen"
import NewOrderDetailsScreen from "./screens/NewOrderDetailsScreen"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
<NavigationContainer>


  <Stack.Navigator initialRouteName="SupplierHomeScreen" screenOptions={{headerShown: false}}>

    <Stack.Screen name = "SignIn" component = {SignIn} />
    <Stack.Screen name = "SiteManagerHomeScreen" component = {SiteManagerHomeScreen} />
    <Stack.Screen name = "SupplierHomeScreen" component = {SupplierHomeScreen} />
    <Stack.Screen name = "OrderScreen" component = {OrderScreen} />
    <Stack.Screen name = "OrderDetailsScreen" component = {OrderDetailsScreen} />
    <Stack.Screen name = "CreateInvoiceScreen" component = {CreateInvoiceScreen} />
    <Stack.Screen name = "NewOrderDetailsScreen" component = {NewOrderDetailsScreen} />

  </Stack.Navigator>

</NavigationContainer>
);

   
}


