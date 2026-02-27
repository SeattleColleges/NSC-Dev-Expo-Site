import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

type Props = {
  title: string;
  description: string;
  linkText: string;
  href: string;
};

export default function InfoTextCard({
  title,
  description,
  linkText,
  href,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <Link href={href} asChild>
        <TouchableOpacity>
          <Text style={styles.link}>{linkText} →</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    backgroundColor: "#E5E5E5",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 240
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    marginVertical: 10,
    textAlign: "center",
    marginBottom: 25,
  },
  link: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
});