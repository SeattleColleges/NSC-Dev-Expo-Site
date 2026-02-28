
import React from "react";
import { View, Text, Image, Pressable, Linking, StyleSheet, ImageSourcePropType } from "react-native";
import { router } from "expo-router";

type Props = {
  imageSrc: ImageSourcePropType; // <-- RN uses this type, not string
  imageAlt?: string; 
  name: string;
  position?: string;
  body?: string | React.ReactNode;
  phone?: string;
  email?: string;
  linkHref?: string; 
  linkText?: string;
};

const FacultyCard: React.FC<Props> = ({
  imageSrc,
  name,
  position,
  body,
  phone,
  email,
  linkHref,
  linkText,
}) => {
  const handlePress = () => {
    if (!linkHref) return;

    // If it's a full URL, open it
    if (linkHref.startsWith("http")) {
      Linking.openURL(linkHref);
      return;
    }

    router.push(linkHref);
    };
  return (
    <View style={styles.card}>
      <Image source={imageSrc} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>

        {position ? <Text style={styles.subheading}>{position}</Text> : null}


        {typeof body === "string" ? <Text style={styles.body}>{body}</Text> : body}
        {phone ? <Text style={styles.subheading}>{phone}</Text> : null}
        {email ? <Text style={styles.subheading}>{email}</Text> : null}

        {linkHref ? (
          <Pressable onPress={handlePress} style={styles.linkContainer}>
            <Text style={styles.link}>{linkText || "Learn more"}</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 16,
    alignItems: "stretch",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: 16,
    //width: "100%",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    paddingRight: 8,
    position: "relative", // important
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  subheading: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginBottom: 10,
  },
  body: {
    color: "#333",
  },
  link: {
    color: "#0969da",
    fontWeight: "700",
  },
  linkContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default FacultyCard;