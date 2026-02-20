import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface ProjectDetailsHeaderProps {
  title: string;
  logo?: ImageSourcePropType; //optional logo
}

export default function ProjectDetailsHeader({
  title,
  logo,
}: ProjectDetailsHeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#3a3a3a",
      }}
    >
      <View>
        {logo ? (
          <Image
            source={logo}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
        ) : (
          <Text style={{ color: "#fff" }}>Project LOGO*</Text>
        )}
      </View>
      <Text
        style={{
          color: "#fff",
          fontSize: 32,
          fontWeight: "bold",
          marginLeft: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
