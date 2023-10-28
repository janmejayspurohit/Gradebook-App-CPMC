import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function StudentCard() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/200" }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
  },
  image: {
    width: 80,
    height: 80,
  },
});
