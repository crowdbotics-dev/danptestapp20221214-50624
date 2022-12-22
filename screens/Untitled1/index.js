import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} onPress={() => {}}><Pressable onPress={() => navigation.navigate("Untitled2", {
        "{Login.email}": "{Login.email}",
        "{Login.nombre}": "{Login.nombre}"
      })}><View style={styles.OjxyKPrD}></View></Pressable><Pressable onPress={() => navigation.navigate("Untitled3", {
        holaaa: holaaa
      })}><View style={styles.KxnbhhRy}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  OjxyKPrD: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  KxnbhhRy: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled1;