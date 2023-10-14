import React , {useState} from "react";
import { View , ScrollView} from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInputs from "../component/signUp_userInputs/userInputs";
import SignUpBtn from "../component/signUp_userInputs/signUpBtn"
import axios from "axios";
import SignInImage from "../component/signUp_userInputs/signUpImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignIn = () => {


    return (
        <KeyboardAwareScrollView contentContainerStyle ={{flex : 1 , justifyContent : "center"}}>
           
            <Text title center >
                Supplier Home Screen
            </Text>

        
            

            
        

        
        </KeyboardAwareScrollView>
    );
};

export default SignIn;
