import React from "react";
import { TouchableOpacity} from "react-native";
import Text from "@kaloraat/react-native-text";

const SignUpBtn =({ onPress }) => (

    

<TouchableOpacity 
        style = {{
            backgroundColor : "#FFC436",
            height: 50,
            marginTop: 60,
            justifyContent : "center",
            borderRadius : 20,
            marginHorizontal: 75,
            marginBottom :42
        }}
        onPress={onPress}
        >
            <Text  bold medium center>
                Place Order
            </Text>
        </TouchableOpacity>

);
 export default SignUpBtn ;
