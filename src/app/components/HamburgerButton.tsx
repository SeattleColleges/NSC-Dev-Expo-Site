import { View, Pressable, StyleSheet } from 'react-native';
import { GestureResponderEvent } from  "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export default function HamburgerButton({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <MaterialIcons name="menu" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
  }
});