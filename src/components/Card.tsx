import { View, Text } from "react-native";

export default function Card({ title }) {
  return (
    <View style={{ padding: 10, borderWidth: 1, margin: 5 }}>
      <Text>{title}</Text>
    </View>
  );
}
