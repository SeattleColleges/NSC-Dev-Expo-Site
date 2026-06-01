import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export interface DesignProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  deliverables: string[];
  imageUri?: string;
  accentColor?: string;
}

export default function DesignProcessStep({
  stepNumber,
  title,
  description,
  deliverables,
  imageUri,
  accentColor = "#4A90D9",
}: DesignProcessStepProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.stepBadge, { backgroundColor: accentColor }]}>
          <Text style={styles.stepNumber}>{stepNumber}.</Text>
        </View>
        <Text style={[styles.title, isSmallScreen && { fontSize: 16 }]}>
          {title}
        </Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}

      <View style={styles.deliverablesContainer}>
        <Text style={styles.deliverablesLabel}>Deliverables</Text>
        {deliverables.map((item, index) => (
          <View key={index} style={[styles.deliverableTag, { backgroundColor: accentColor }]}>
            <Text style={styles.deliverableText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  stepBadge: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  stepNumber: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    flexShrink: 1,
  },
  description: {
    fontSize: 13,
    color: "#444444",
    lineHeight: 18,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 4,
    resizeMode: "cover",
    marginBottom: 12,
    backgroundColor: "#C4C4C4",
  },
  imagePlaceholder: {
    width: "100%",
    height: 140,
    borderRadius: 4,
    backgroundColor: "#C4C4C4",
    marginBottom: 12,
  },
  deliverablesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
  },
  deliverablesLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#555555",
    marginRight: 4,
  },
  deliverableTag: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  deliverableText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "500",
  },
});
