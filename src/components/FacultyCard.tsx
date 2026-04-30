

import React from "react";
import { View, Text, StyleSheet, Image, Pressable, Linking } from "react-native";

type Faculty = {
  name: string;
  title: string;
  email: string;
  github?: string;
  linkedin?: string;
  image: string;
};

type Props = {
  faculty: Faculty;
};

export default function FacultyCard({ faculty }: Props) {
  function openLink(url?: string) {
    if (url) {
      Linking.openURL(url);
    }
  }

  return (
    <View style={styles.card}>
      {/* Faculty image */}
      <Image source={{ uri: faculty.image }} style={styles.image} />

      {/* Name + title + email */}
      <Text style={styles.name}>{faculty.name}</Text>
      <Text style={styles.title}>{faculty.title}</Text>
      <Text style={styles.email}>{faculty.email}</Text>

      {/* GitHub / LinkedIn links */}
      <View style={styles.links}>
        <Pressable onPress={() => openLink(faculty.github)}>
          <Text style={styles.link}>GitHub</Text>
        </Pressable>

        <Pressable onPress={() => openLink(faculty.linkedin)}>
          <Text style={styles.link}>LinkedIn</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      padding: 16,
      borderRadius: 12,
      margin: 12,
      elevation: 3,
      alignItems: "center",
    },
  
    image: {
      width: 90,
      height: 90,
      borderRadius: 45,
      marginBottom: 12,
    },
  
    name: {
      fontSize: 18,
      fontWeight: "600",
    },
  
    title: {
      fontSize: 14,
      color: "#555",
      marginBottom: 4,
    },
  
    email: {
      fontSize: 13,
      color: "#777",
      marginBottom: 12,
    },
  
    links: {
      flexDirection: "row",
      gap: 16,
    },
  
    link: {
      color: "#1A73E8",
      fontWeight: "600",
    },
  });
//import { View, Text, Image, StyleSheet } from "react-native";

//export default function FacultyCard({ faculty }) {
  //return (
   // <View>
     // <Text>{faculty.name}</Text>
    //</View>
  //);
//}