import { Pressable, Text, StyleSheet, GestureResponderEvent, PressableProps, StyleProp, ViewStyle } from 'react-native';

interface HeroCTAButtonProps extends PressableProps {
    label: string;
    style?: StyleProp<ViewStyle>;
};

export default function HeroCTAButton({ 
        label,
        style,
        ...rest
    }: HeroCTAButtonProps) {
  return (
    <Pressable
        {...rest}
        style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
            style, //external style applied last
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