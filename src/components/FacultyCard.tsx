

import React from "react";
import {View,Text,StyleSheet,Image,Pressable,Linking,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Faculty = {
  name: string;
  title: string;
  email: string;
  phone: string;
  education: string[];
  bio: string;
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
      {/* HEADER IMAGE */}
      <Image source={{ uri: faculty.image }} style={styles.image} />

      <Text style={styles.name}>{faculty.name}</Text>
      <Text style={styles.title}>{faculty.title}</Text>

      {/* TWO COLUMN LAYOUT */}
      <View style={styles.container}>
        {/* LEFT SIDE (Light Grey) */}
        <LinearGradient colors={["#E5E5E5", "#CFCFCF"]} style={styles.left}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.text}>{faculty.email}</Text>
          <Text style={styles.text}>{faculty.phone}</Text>

          <Text style={styles.sectionTitle}>Education</Text>
          {faculty.education.map((edu, index) => (
            <Text key={index} style={styles.text}>
              {edu}
            </Text>
          ))}

          <View style={styles.links}>
            <Pressable onPress={() => openLink(faculty.github)}>
              <Text style={styles.link}>GitHub</Text>
            </Pressable>

            <Pressable onPress={() => openLink(faculty.linkedin)}>
              <Text style={styles.link}>LinkedIn</Text>
            </Pressable>
          </View>
        </LinearGradient>

        {/* RIGHT SIDE (Black Gradient Bio) */}
        <LinearGradient colors={["#1A1A1A", "#000"]} style={styles.right}>
          <Text style={styles.bioTitle}>Bio</Text>
          <Text style={styles.bio}>{faculty.bio}</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
      margin: 12,
      overflow: "hidden",
    },
  
    image: {
      width: 90,
      height: 90,
      borderRadius: 45,
      alignSelf: "center",
      marginTop: 16,
    },
  
    name: {
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
    },
  
    title: {
      fontSize: 14,
      color: "#555",
      textAlign: "center",
      marginBottom: 10,
    },
  
    container: {
      flexDirection: "row",
    },
  
    left: {
      flex: 1,
      padding: 12,
    },
  
    right: {
      flex: 1,
      padding: 12,
    },
  
    sectionTitle: {
      fontWeight: "700",
      marginTop: 8,
      marginBottom: 4,
    },
  
    text: {
      fontSize: 13,
      color: "#333",
      marginBottom: 2,
    },
  
    links: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    link: {
      color: "#1A73E8",
      fontWeight: "600",
    },
  
    bioTitle: {
      color: "#fff",
      fontWeight: "700",
      marginBottom: 6,
    },
  
    bio: {
      color: "#E5E5E5",
      fontSize: 13,
      lineHeight: 18,
    },
  });


