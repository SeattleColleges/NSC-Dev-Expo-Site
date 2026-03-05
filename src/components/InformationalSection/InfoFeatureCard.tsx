import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

type Props = {
  title: string;
  description: string;
  stat: string;
  statDescription: string;
  href: string;
};

export default function InfoFeatureCard({
  title,
  description,
  stat,
  statDescription,
  href,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.stat}>{stat}</Text>

      <Text style={styles.statDescription}>{statDescription}</Text>

      <Link href={href} asChild>
        <Pressable>
          <Text style={styles.link}>See more details →</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "30%",
    backgroundColor: "#d9d9d9",
    padding: 28,
    alignItems: "center",
    minHeight: 500,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 60,
  },

  description: {
    textAlign: "center",
    marginBottom: 20,
  },

  stat: {
    fontSize: 40,
    fontWeight: "700",
  },

  statDescription: {
    textAlign: "center",
    marginBottom: 40,
  },

  link: {
    fontWeight: "600",
  },
});