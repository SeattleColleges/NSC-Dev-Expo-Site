import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  description: string;
  value: string;
  statDescription: string;
  linkText: string;
};

export default function InfoCardDesktop({
  title,
  description,
  value,
  statDescription,
  linkText,
}: Props) {
  return (
    <View style={styles.card}>
      {/* 상단 텍스트 */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* 중간 숫자 */}
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.statDescription}>{statDescription}</Text>

      {/* 하단 링크 */}
      <TouchableOpacity>
        <Text style={styles.link}>{linkText} →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexBasis: "25%",
    backgroundColor: "#E5E5E5",
    padding: 30,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 550,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },

  description: {
    textAlign: "center",
    marginBottom: 30,
  },

  value: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 10,
  },

  statDescription: {
    textAlign: "center",
    marginBottom: 30,
  },

  link: {
    fontSize: 18,
    fontWeight: "bold",
  },
});