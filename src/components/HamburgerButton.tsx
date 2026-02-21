import { Pressable, StyleSheet } from 'react-native';
import { GestureResponderEvent } from  "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export default function HamburgerButton({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Feather name="menu" size={62} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingInline: 10,
    justifyContent: 'center',
  }
});