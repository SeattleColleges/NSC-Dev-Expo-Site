import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function SelectProjects() {
  const [selected, setSelected] = useState("Belinda’s Closet");

  const projects = [
    { name: "Next Wave Dev" },
    { name: "Belinda’s Closet" },
    { name: "NSC Events" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with centered title + right chevron */}
      <View style={styles.headerBar}>
        <Text style={styles.headerText}>Select Projects</Text>

        <Pressable
          onPress={() => router.push("/")}
          style={styles.chevronButton}
        >
          <Text style={styles.chevron}>{"<"}</Text>
        </Pressable>
      </View>

      {/* Project cards */}
      <View style={styles.grid}>
        {projects.map((project) => {
          const isActive = selected === project.name;

          return (
            <Pressable
              key={project.name}
              onPress={() => setSelected(project.name)}
              style={[styles.card, isActive && styles.cardActive]}
            >
              {/* Centered project name */}
              <Text
                style={[styles.cardTitle, isActive && styles.cardTitleActive]}
              >
                {project.name}
              </Text>

              {/* Figma-style graphic placeholder */}
              <View
                style={[styles.graphicBox, isActive && styles.graphicBoxActive]}
              >
                <Text
                  style={[
                    styles.graphicText,
                    isActive && styles.graphicTextActive,
                  ]}
                >
                  Graphic background*
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#504c4c", // lighter gray background
  },

  /* HEADER */
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },

  headerText: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
  },

  chevronButton: {
    position: "absolute",
    right: 0,
    padding: 10,
  },

  chevron: {
    fontSize: 32,
    fontWeight: "600",
  },

  /* GRID */
  grid: {
    flexDirection: "column",
    gap: 20,
  },

  /* CARD */
  card: {
    backgroundColor: "#E5E5E5",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },

  cardActive: {
    backgroundColor: "#000",
  },

  cardTitle: {
    fontSize: 26,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
    textAlign: "center",
  },

  cardTitleActive: {
    color: "#fff",
  },

  /* GRAPHIC PLACEHOLDER */
  graphicBox: {
    height: 140,
    width: "100%",
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  graphicBoxActive: {
    backgroundColor: "#333",
  },

  graphicText: {
    color: "#000",
    fontSize: 16,
  },

  graphicTextActive: {
    color: "#fff",
  },
});
