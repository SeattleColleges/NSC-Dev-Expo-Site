import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ProjectDetailsHeaderProps {
  title: string;
  logo?: ImageSourcePropType; //optional logo
}

export default function ProjectDetailsHeader({
  title,
  logo,
}: ProjectDetailsHeaderProps) {
  return (
    <LinearGradient
      colors={["#2f2f2f", "#4a4a4a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
    >
      {logo ? (
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      ) : (
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Project{"\n"}LOGO*</Text>
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 16,
  },
  logoBox: {
    width: 70,
    height: 70,
    backgroundColor: "#5a5a5a",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  logoText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});
