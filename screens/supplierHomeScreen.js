import React , {useState} from "react";
import {  View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInputs from "../component/signUp_userInputs/userInputs";
import SignUpBtn from "../component/signUp_userInputs/signUpBtn"
import axios from "axios";
import SignInImage from "../component/signUp_userInputs/signUpImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FooterTabs from "../component/Nav/footertabs";

const SupplierHomeScreen = () => {


    return (
        <KeyboardAwareScrollView contentContainerStyle ={{flex : 1 , justifyContent : "center"}}>
           
            <Text title center >
                Supplier Home Screen
            </Text>

            <SafeAreaView style={{
                flex: 1,
                justifyContent: "space-between",
                position: "absolute",
                bottom: 0,
                width: "100%",
            }}>
                <FooterTabs />
            </SafeAreaView>

        
            

            
        

        
        </KeyboardAwareScrollView>
    );
};

export default SupplierHomeScreen;
