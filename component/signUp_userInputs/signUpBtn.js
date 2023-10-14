import React from "react";
import { TouchableOpacity} from "react-native";
import Text from "@kaloraat/react-native-text";

const SignUpBtn =({ onPress }) => (

    

<TouchableOpacity 
        style = {{
            backgroundColor : "#FFC436",
            height: 50,
            marginTop: 10,
            justifyContent : "center",
            borderRadius : 20,
            marginHorizontal: 75,
            marginBottom :10
        }}
        onPress={onPress}
        >
            <Text  bold medium center>
                Sign Up
            </Text>
        </TouchableOpacity>

);
 export default SignUpBtn ;
