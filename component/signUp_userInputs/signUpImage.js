import React from "react";
import {View , Image , Text} from "react-native";

const SignInImage = () => (
    <View style = {{
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Image source={require("../../assets/SignInImage.png")}
        style = {{width : 300 , height: 250, marginVertical: 30}}
        ></Image>
    </View>
);

export default SignInImage;