import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./screens/signIn";
import SiteManagerHomeScreen from "./screens/SiteManagerHomeScreen";
import SupplierHomeScreen from "./screens/SupplierHomeScreen"
import SupplierOrderScreen from "./screens/display_supplier_orders/SupplierOrderScreen"
import CreateInvoiceScreen from "./screens/create_invoice/CreateInvoiceScreen"
import OrderDetailsScreen from "./screens/display_supplier_orders/OrderDetailsScreen"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
<NavigationContainer>


  <Stack.Navigator initialRouteName="SupplierOrderScreen" screenOptions={{headerShown: false}}>

    <Stack.Screen name = "SignIn" component = {SignIn} />
    <Stack.Screen name = "SiteManagerHomeScreen" component = {SiteManagerHomeScreen} />
    <Stack.Screen name = "SupplierHomeScreen" component = {SupplierHomeScreen} />
    <Stack.Screen name = "SupplierOrderScreen" component = {SupplierOrderScreen} />
    <Stack.Screen name = "CreateInvoiceScreen" component = {CreateInvoiceScreen} />
    <Stack.Screen name = "OrderDetailsScreen" component = {OrderDetailsScreen} />

  </Stack.Navigator>

</NavigationContainer>
);

   
}


