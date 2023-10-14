import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import FooterTabs from "../component/Nav/footertabs";
import { Divider } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";

const Home = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#FFC436",
            height: 150, // Set the height to your desired value
        },
    });
    const navigation = useNavigation();

    const navigateToSiteInfo = () => {
        navigation.navigate("SiteInfo");
      };

    const styles1 = StyleSheet.create({
        container: {
            backgroundColor: "#FFF",
            marginTop: -45,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 800,
            paddingTop: 25,
        },
    });

    const styles2 = StyleSheet.create({
        container: {
            backgroundColor: "#F6F1F1",
            marginTop: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            height: 150,
            width: 200,
            padding: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            
        },
    });

    const styles3 = StyleSheet.create({
        container: {
            backgroundColor: "#fff9c4",
            marginTop: 10,
            borderRadius: 40,
            marginHorizontal: 20,
            height: 80,
            width: 320,
            padding: 20,
            marginBottom: 10
        },
    });

    return (
        <>
            
           
                
                <View>
                <Text style={{
                    fontSize: 28,
                    marginHorizontal: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 50,
                    marginBottom:10
                }}>
                    Order List
                </Text>
                </View>
                <ScrollView
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ margin: 0, marginRight: 0 }}
                >
                
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                
                </ScrollView>
                      
      

            <SafeAreaView style={{
                flex: 1,
                justifyContent: "space-between",
                position: "absolute",
                bottom: 0,
                width: "100%",

            }}>
                <FooterTabs />
            </SafeAreaView>
        </>
    );
}

export default Home;
