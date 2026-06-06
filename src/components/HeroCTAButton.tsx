
import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

type HeroCTAButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function HeroCTAButton({
  label,
  onPress,
  disabled = false,
  style,
}: HeroCTAButtonProps) {
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
    backgroundColor: "#323232",
    padding: 8,
    alignSelf: "flex-start",
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    color: "#DEDEDE",
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 20,
  },
});