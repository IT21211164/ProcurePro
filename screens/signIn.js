import React , {useState} from "react";
import { View , ScrollView} from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInputs from "../component/signUp_userInputs/userInputs";
import SignUpBtn from "../component/signUp_userInputs/signUpBtn"
import axios from "axios";
import SignInImage from "../component/signUp_userInputs/signUpImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignIn = ({navigation}) => {
    const [username , setName] = useState("");
    const [password , setPassword] = useState("");
    const [loading , setLoading] = useState(false);

    //console.log("NAVIGATION ->", navigation);

    const handleSubmit = () => {
        setLoading(true);
    
        if (!username || !password) {
          alert("All fields are required");
          setLoading(false);
          return;
        }
    
        // Check username and password
        if (username === "site manager" && password === "1234") {
            // Navigate to the Site Manager home screen upon successful login
            navigation.navigate("SiteManagerHomeScreen");
          } else if (username === "supplier" && password === "1234") {
            // Navigate to the Supplier home screen upon successful login
            navigation.navigate("SupplierHomeScreen");
          } else {
            alert("Invalid credentials");
          }
    
        setLoading(false);
      };

    return (
        <KeyboardAwareScrollView contentContainerStyle ={{flex : 1 , justifyContent : "center"}}>
            <SignInImage />
            <Text title center >
                Sign Up
            </Text>

        < UserInputs name = "User Name" value = {username} setValue = {setName} />
        < UserInputs name = "Password" value = {password} setValue = {setPassword} secureTextEntry={true} autoCompleteType = "password"/>

        
            <SignUpBtn onPress={handleSubmit}/>

            <Text 
            small center color =  "#362FD9" >Forgot password?</Text>
        

        
        </KeyboardAwareScrollView>
    );
};

export default SignIn;