import { Pressable, StyleSheet, GestureResponderEvent } from "react-native";
import { Feather } from "@expo/vector-icons";

interface HamburgerButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

export default function HamburgerButton({ onPress }: HamburgerButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      accessibilityRole="button"
      accessibilityLabel="Open navigation menu"
    >
      <Feather name="menu" size={40} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});