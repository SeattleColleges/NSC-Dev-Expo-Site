import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeroCTAButton from "./HeroCTAButton";

interface InformationalSectionButtonProps {
  title: string;
  description: string;
  buttonLabel: string;
}

export default function InformationalSectionButton({
  title,
  description,
  buttonLabel,
}: InformationalSectionButtonProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <HeroCTAButton label={buttonLabel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});
