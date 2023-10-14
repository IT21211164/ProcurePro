import React from "react";
import { View , TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

const UserInputs = ({name , value , setValue , secureTextEntry = false }) => {

    return (

        <View style = {{marginHorizontal:24}}>
            <Text style={{ fontSize: 18, fontWeight: "500" }} >{name}</Text>
            <TextInput
            secureTextEntry = {secureTextEntry}
            style = {{borderWidth: 0.5 , height : 48 , borderRadius: 10 , marginBottom: 10}} 

            value={value}
            onChangeText={(text) => setValue(text)}> 
            
            </TextInput>
            
        </View>
        
    );
};

export default UserInputs;