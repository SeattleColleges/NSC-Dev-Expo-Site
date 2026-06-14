import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StatBlock from "./StatBlock";

interface InformationSectionBlocksProps {
  title: string;
  description: string;
  stats: {
    value: string;
    description: string;
  }[];
}

export default function InformationSectionBlocks({
  title,
  description,
  stats,
}: InformationSectionBlocksProps) {
  return (
    <View style={styles.container}>
      <View style={styles.infoSection}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <StatBlock
            key={index}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
  },

  infoSection: {
    backgroundColor: "#666666",
    padding: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },

  description: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 22,
  },

  statsContainer: {
    padding: 16,
  },
});
