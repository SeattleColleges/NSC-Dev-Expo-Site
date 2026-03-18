import { View, Text, StyleSheet } from "react-native";

type Props = {
  value: string;
  description: string;
};

export default function InfoStatCard({ value, description }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexBasis: "50%",
    backgroundColor: "#F2F2F2",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontSize: 45,
    fontWeight: "400",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
  },
});