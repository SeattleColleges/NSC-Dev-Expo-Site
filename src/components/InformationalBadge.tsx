import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  onPress?: () => void;
};

export default function InformationalBadge({
  title,
  description,
  buttonText,
  onPress,
}: Props) {
  return (
    <View style={styles.card}>
      {/* Top bar */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.iconPlaceholder}>
          <Text>Icon</Text>
        </View>

        <Text style={styles.description}>{description}</Text>

        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 260,
    backgroundColor: "#ddd",
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 4,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#666",
    paddingVertical: 8,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#bbb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  description: {
    textAlign: "center",
    marginBottom: 16,
    fontSize: 13,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
