import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SDLCPhaseSectionProps {
  phaseTitle: string;
  phaseDescription: string;
  storyTitle: string;
  storyDescription: string;
  caption?: string;
}

export default function SDLCPhaseSection({
  phaseTitle,
  phaseDescription,
  storyTitle,
  storyDescription,
  caption,
}: SDLCPhaseSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.phaseTitle}>{phaseTitle}</Text>

      <Text style={styles.phaseDescription}>{phaseDescription}</Text>

      <Text style={styles.storyTitle}>{storyTitle}</Text>

      <Text style={styles.storyDescription}>{storyDescription}</Text>

      <View style={styles.imagePlaceholder}>
        <Text>Image Placeholder</Text>
      </View>

      {caption && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    maxWidth: 390,
  },

  phaseTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },

  phaseDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },

  storyTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },

  storyDescription: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },

  imagePlaceholder: {
    height: 180,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  caption: {
    fontSize: 12,
    textAlign: "center",
  },
});
