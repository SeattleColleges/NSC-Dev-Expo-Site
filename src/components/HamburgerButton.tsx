import {
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Feather } from "@expo/vector-icons";

interface HamburgerButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  size?: number;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

export default function HamburgerButton({
  onPress,
  size = 62,
  accessibilityLabel = "Open menu",
  style,
}: HamburgerButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Feather name="menu" size={size} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});
