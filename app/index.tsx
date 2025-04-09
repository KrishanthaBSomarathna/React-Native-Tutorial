import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

const img = require("../assets/images/partial-react-logo.png");

export default function Index() {
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <Image source={img} style={styles.image} />
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
