import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export interface Deliverable {
  label: string;
  description: string;
}

export interface DesignProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  deliverables: Deliverable[];
  imageUri?: string;
}

export default function DesignProcessStep({
  stepNumber,
  title,
  description,
  deliverables,
  imageUri,
}: DesignProcessStepProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;

  return (
    <View style={styles.card}>
      {/* Dark header bar */}
      <View style={styles.header}>
        <Text style={[styles.title, isSmallScreen && { fontSize: 16 }]}>
          {stepNumber}. {title}
        </Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.description}>{description}</Text>

        {/* Image or placeholder */}
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>image here*</Text>
          </View>
        )}

        {/* Deliverables section */}
        <Text style={styles.deliverablesHeading}>
          {title} Deliverables
        </Text>
        {deliverables.map((item, index) => (
          <View key={index} style={styles.deliverableItem}>
            <View style={styles.deliverableTag}>
              <Text style={styles.deliverableLabel}>{item.label}</Text>
            </View>
            <Text style={styles.deliverableDescription}>
              {item.description}
            </Text>
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
    marginHorizontal: 12,
    marginVertical: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  header: {
    backgroundColor: "#2e2e2e",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  body: {
    padding: 16,
  },
  description: {
    fontSize: 13,
    color: "#444444",
    lineHeight: 20,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 4,
    resizeMode: "cover",
    marginBottom: 16,
    backgroundColor: "#C4C4C4",
  },
  imagePlaceholder: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 4,
    backgroundColor: "#C4C4C4",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholderText: {
    color: "#888888",
    fontSize: 12,
  },
  deliverablesHeading: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  deliverableItem: {
    marginBottom: 12,
  },
  deliverableTag: {
    backgroundColor: "#2e2e2e",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  deliverableLabel: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  deliverableDescription: {
    fontSize: 12,
    color: "#444444",
    lineHeight: 18,
  },
});
