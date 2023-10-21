import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({

    //SupplierOrderScreen styles
    header:{
        fontSize: 28,
        marginHorizontal: 15,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 40,
        marginBottom:15,
        fontWeight:"bold"
    },
    footertab:{
        flex: 1,
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        width: "100%",
        marginTop:100
    },
    ordercontainer: {
        backgroundColor: "white",
        marginTop: 4,
        borderRadius: 5,
        height: 70,
        width: 320,
        padding: 10,
        paddingLeft: 20,
        marginBottom: 4,  
    },
    column:{
        backgroundColor: "white",
        marginTop: 0,
        borderRadius: 5,
        marginLeft: 3,
        height: 40,
        width: 105,
        paddingTop:10,
        marginBottom: -10,
        backgroundColor:"#f7d76e"
    },
    columntext:{
        textAlign:"center",
        fontWeight:"500"
    },
    site: {
        fontSize:14,
        padding: 2,
        color:"#696969"        
    },
    amount: {
        fontSize:18,
        padding: 2,
        fontWeight: "500"      
    },
    placedstatus: {
        textAlign:"right",
        marginTop:-48,
        marginEnd:20,
        color:"white",
        fontSize:16,
        fontWeight:"500"
    },
    acceptstatus: {
        textAlign:"right",
        marginTop:-48,
        marginEnd:20,
        color:"green",
        fontSize:16,
        fontWeight:"500"
    },
    rejectstatus:{
        textAlign:"right",
        marginTop:-48,
        marginEnd:20,
        color:"#708090",
        fontSize:16,
        fontWeight:"500"    
    },


    //OrderDetailsScreen styles
    acc_rej_btn:{
        backgroundColor:"#f6d155",
        padding:10,
        borderRadius:5,
        margin:10,
        width:80
    },
    btntext:{
        fontSize:17,
        fontWeight:"500",
        alignSelf:"center"
    },
    orderStatusAccept:{
        fontSize: 20,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
        marginBottom:10,
        fontWeight:"bold",
        color:"green"
    },
    orderStatusReject:{
        fontSize: 20,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
        marginBottom:10,
        fontWeight:"bold",
        color:"#708090"
    },
    topData:{
        fontSize: 15,
        alignSelf: "center",
        marginBottom:10,
        fontWeight:"bold",
        color:"#808080",
        fontWeight:"400"
    },
    itemHeader:{
        backgroundColor:"white", 
        padding:12, 
        margin:15,
        borderRadius:10
    },
    itemRow:{
        flexDirection:'row',
        padding:10,
        marginTop:10,
        backgroundColor:"#FFFAF0",
        width:310
    },
    totalAmountRow:{
        flexDirection:'row',
        padding:12,
        marginTop:4,
        backgroundColor:"white",
        margin:15, 
        borderRadius:10
    },

    //confirmation screen styles
    confirmbuttons:{
        flexDirection:"row",
        alignSelf:"center",
        fontSize:16,
        marginTop:5
    },
    confirmbtn:{
        backgroundColor:"#f6d155",
        width:70,
        padding:8,
        margin:10,
        alignItems:"center",
        borderRadius:5,
     
    },
    confirmbtntext:{
        fontSize:16,
        fontWeight:"500",
        color:"black"
    },
    confirmtext:{
        fontSize:16
    },
    confirmationBox:{
        backgroundColor:"white",
        padding:20,
        width:308,
        borderRadius:10
    }

});

export default styles;
