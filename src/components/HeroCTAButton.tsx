import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function HeroCTAButton({
  label,
  onPress,
  disabled,
  style,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // margin: 24,
    backgroundColor: '#323232',
    padding: 8,
    alignSelf: "flex-start"
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#DEDEDE",
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 20
    // fontFamily: "Inter"
  },
});