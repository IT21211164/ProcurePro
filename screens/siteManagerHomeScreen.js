import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Text1 from "@kaloraat/react-native-text";
import FooterTabs from "../component/Nav/footertabs";
import { Divider } from "react-native-elements";
import backgroundImage from '../assets/bg_photo.jpg';
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
            height: 60,
            width: 350,
            padding: 20,
            marginBottom: 10
        },
    });

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text1 title center light>
                    HOME
                </Text1>
            </SafeAreaView>
            <View style={styles1.container}>
                <Text style={{
                    fontSize: 25,
                    marginHorizontal: 15,
                }}>
                    Sites
                </Text>
                <View style={{ height: 170 , marginHorizontal:10}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ margin: 0, marginRight: 0 }}
                >
                    <TouchableOpacity style={styles2.container} onPress={navigateToSiteInfo}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles2.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles2.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                </ScrollView>
                </View>
                <View>
                <Text style={{
                    fontSize: 25,
                    marginHorizontal: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 10
                }}>
                    Sites
                </Text>
                </View>
                <View style={{ height: 400 , padding :20 , alignItems:"center" }}>
                
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.container}>
                        <Text>aaaaaaaaaaaaa</Text>
                    </TouchableOpacity>
                
                </View>
                      
            </View>

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
