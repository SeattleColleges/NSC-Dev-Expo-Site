import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export type StudentCardProps = {
  name: string;
  description: string;
  role?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  studentPageUrl?: string;
};

export default function StudentCard({
  name,
  role = "Design Lead",
  description,
  githubUrl,
  linkedInUrl,
  studentPageUrl,
}: StudentCardProps) {
  const openUrl = (url?: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageBox} />

      <View style={styles.content}>
        <View style={styles.nameBox}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.footer}>
          <View style={styles.icons}>
            <Pressable onPress={() => openUrl(githubUrl)}>
              <FontAwesome name="github" size={18} color="#000000" />
            </Pressable>

            <Pressable onPress={() => openUrl(linkedInUrl)}>
              <FontAwesome name="linkedin-square" size={16} color="#777777" />
            </Pressable>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => openUrl(studentPageUrl)}
          >
            <Text style={styles.buttonText}>Student page 》</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#4A4A4A",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 18,
  },
  imageBox: {
    width: "32%",
    aspectRatio: 1,
    backgroundColor: "#CFCFCF",
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  nameBox: {
    backgroundColor: "#747474",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  role: {
    color: "#FFFFFF",
    fontSize: 11,
    fontStyle: "italic",
  },
  description: {
    color: "#FFFFFF",
    fontSize: 11,
    lineHeight: 15,
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#000000",
    fontSize: 10,
    fontWeight: "700",
  },
});