import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  useWindowDimensions,
} from "react-native";
import { FontAwesome, FontAwesome6, Entypo, Ionicons } from "@expo/vector-icons";

export default function Footer() {
  const { width } = useWindowDimensions();

  const isSmall = width < 400;
  const isMedium = width >= 400 && width < 768;
  const isLarge = width >= 768;

  const iconSize = isSmall ? 28 : isMedium ? 34 : 40;
  const headingSize = isSmall ? 16 : isMedium ? 18 : 22;
  const textSize = isSmall ? 13 : isMedium ? 16 : 20;
  const copySize = isSmall ? 12 : isMedium ? 14 : 18;
  const linkSize = isSmall ? 13 : isMedium ? 15 : 18;

  const iconRowWidth = isSmall ? "92%" : isMedium ? "70%" : "55%";

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.footer}>
        <View style={[styles.iconRow, { width: iconRowWidth }]}>

          {/* Facebook */}
          <Pressable onPress={() => openLink("https://www.facebook.com")}>
            <FontAwesome6 name="facebook" size={iconSize} color="black" />
          </Pressable>

          {/* X */}
          <Pressable onPress={() => openLink("https://x.com")}>
            <FontAwesome6 name="x-twitter" size={iconSize} color="black" />
          </Pressable>

          {/* Instagram (outlined / hollow) */}
          <Pressable onPress={() => openLink("https://www.instagram.com")}>
            <Ionicons name="logo-instagram" size={iconSize} color="black" />
          </Pressable>

          {/* YouTube */}
          <Pressable onPress={() => openLink("https://www.youtube.com")}>
            <Entypo name="youtube" size={iconSize} color="black" />
          </Pressable>

          {/* LinkedIn boxed */}
          <Pressable onPress={() => openLink("https://www.linkedin.com")}>
            <FontAwesome name="linkedin-square" size={iconSize} color="black" />
          </Pressable>

        </View>

        <View style={styles.textBlock}>
          <Text style={[styles.heading, { fontSize: headingSize }]}>
            Address:
          </Text>
          <Text style={[styles.text, { fontSize: textSize, lineHeight: textSize * 1.3 }]}>
            North Seattle College
          </Text>
          <Text style={[styles.text, { fontSize: textSize, lineHeight: textSize * 1.3 }]}>
            9600 College Way North
          </Text>
          <Text style={[styles.text, { fontSize: textSize, lineHeight: textSize * 1.3 }]}>
            Seattle, WA 98103
          </Text>
        </View>

        <View style={styles.textBlock}>
          <Text style={[styles.heading, { fontSize: headingSize }]}>
            Contact
          </Text>
          <Text style={[styles.text, { fontSize: textSize, lineHeight: textSize * 1.3 }]}>
            206.934.3600
          </Text>
        </View>

        <Text style={[styles.copy, { fontSize: copySize }]}>
          ©2025 All rights reserved
        </Text>

        <View style={styles.linkRow}>
          <Pressable>
            <Text style={[styles.link, { fontSize: linkSize }]}>Terms</Text>
          </Pressable>

          <Pressable>
            <Text style={[styles.link, { fontSize: linkSize }]}>Privacy</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 40,
  },
  footer: {
    width: "100%",
    backgroundColor: "#9d9d9d",
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 34,
  },
  textBlock: {
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
    lineHeight: 20,
  },
  copy: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  linkRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 28,
  },
  link: {
    color: "white",
    textDecorationLine: "underline",
  },
});
