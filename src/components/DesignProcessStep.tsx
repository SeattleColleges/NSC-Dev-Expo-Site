import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
} from "react-native";

export interface Deliverable {
  label: string;
  description: string;
}

export interface DesignProcessStepProps {
  stepNumber: number;
  title: string;
  sectionTitle?: string;
  sectionDescription?: string;
  bodyTitle?: string;
  description: string;
  deliverables: Deliverable[];
  style?: ViewStyle;
}

export default function DesignProcessStep({
  stepNumber,
  title,
  sectionTitle,
  sectionDescription,
  bodyTitle,
  description,
  deliverables,
  style,
}: DesignProcessStepProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;

  return (
    <View style={[styles.card, style]}>
      {/* Dark header bar */}
      <View style={styles.header}>
        <Text style={[styles.title, isSmallScreen && { fontSize: 16 }]}>
          {stepNumber}. {title}
        </Text>
      </View>

      {/* Grey sub-section box */}
      {(sectionTitle || sectionDescription) && (
        <View style={styles.sectionBox}>
          {sectionTitle && (
            <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          )}
          {sectionDescription && (
            <Text style={styles.sectionDescription}>{sectionDescription}</Text>
          )}
        </View>
      )}

      {/* Body */}
      <View style={styles.body}>
        {bodyTitle && (
          <Text style={styles.bodyTitle}>{bodyTitle}</Text>
        )}
        <Text style={styles.description}>{description}</Text>

        {/* Deliverables heading banner */}
        <View style={styles.deliverablesHeadingBanner}>
          <Text style={styles.deliverablesHeading}>
            {title} Deliverables
          </Text>
        </View>

        {deliverables.map((item, index) => (
          <View key={`${item.label}-${index}`} style={styles.deliverableItem}>
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
    backgroundColor: "#3A3A3A",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  sectionBox: {
    backgroundColor: "#4A4A4A",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  sectionDescription: {
    fontSize: 12,
    color: "#CCCCCC",
    lineHeight: 18,
  },
  body: {
    padding: 16,
  },
  bodyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: "#444444",
    lineHeight: 20,
    marginBottom: 12,
  },
  deliverablesHeadingBanner: {
    backgroundColor: "#E8E8E8",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  deliverablesHeading: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  deliverableItem: {
    marginBottom: 12,
  },
  deliverableTag: {
    backgroundColor: "#E8E8E8",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  deliverableLabel: {
    color: "#1A1A1A",
    fontSize: 12,
    fontWeight: "600",
  },
  deliverableDescription: {
    fontSize: 12,
    color: "#444444",
    lineHeight: 18,
  },
});