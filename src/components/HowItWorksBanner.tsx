import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HowItWorksBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How it all works?</Text>

      <Text style={styles.description}>
        Learn how students participate throughout the software development
        lifecycle from planning and design to coding and deployment.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
  },
});
