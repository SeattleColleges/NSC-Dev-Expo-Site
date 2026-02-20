import { View, Pressable, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
};

export default function HamburgerButton({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
  },
  line: {
    width: 24,
    height: 2,
    backgroundColor: '#000',
    marginVertical: 3,
  },
});