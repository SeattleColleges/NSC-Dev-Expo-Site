import { Pressable, StyleSheet, GestureResponderEvent } from 'react-native';
import { Feather } from "@expo/vector-icons";

interface HamburgerButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  expanded: boolean;
};

export default function HamburgerButton({ onPress, expanded }: HamburgerButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      role="button"
      aria-label="Navigation menu"
      aria-expanded={expanded}
    >
      <Feather name="menu" size={62} color="black" aria-hidden />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingInline: 10,
    justifyContent: 'center',
  }
});
