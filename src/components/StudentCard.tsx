import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  name: string;
  role: string;
  description: string;
  githubUrl?: string;
  linkedinUrl?: string;
  studentPageUrl?: string;
  variant?: "default" | "currentStudents" | "managementTeam";
};

export default function StudentCard({
  name,
  role,
  description,
  githubUrl,
  linkedinUrl,
  studentPageUrl,
  variant = "default",
}: StudentCardProps) {
  const card = (
    <View
      style={[
        styles.card,
        variant === "currentStudents" && styles.currentStudentCard,
      ]}
    >
      <View style={styles.imageBox} />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.bottomRow}>
          <View style={styles.icons}>
            {githubUrl ? <Text style={styles.icon}>●</Text> : null}
            {linkedinUrl ? <Text style={styles.icon}>▣</Text> : null}
          </View>

          {studentPageUrl ? (
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Student page &gt;</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );

  if (variant === "currentStudents") {
    return (
      <View style={styles.currentStudentsSection}>
        <Text style={styles.sectionTitle}>Current Students</Text>
        {card}
      </View>
    );
  }

  if (variant === "managementTeam") {
    return (
      <View style={styles.mobilePage}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>

          <View style={styles.menu}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroText}>See the talent of the future</Text>
        </View>

        <View style={styles.managementSection}>
          <Text style={styles.managementTitle}>
            Current student management team
          </Text>

          <View style={styles.cardStack}>
            {card}
            {card}
            {card}
            {card}
          </View>
        </View>

        <View style={styles.currentStudentsSmall}>
          <Text style={styles.smallSectionTitle}>Current Students</Text>
          {card}
        </View>
      </View>
    );
  }

  return card;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#666666",
    flexDirection: "row",
    padding: 8,
    gap: 8,
    width: "100%",
    maxWidth: 300,
  },
  currentStudentCard: {
    maxWidth: 260,
  },
  imageBox: {
    width: 90,
    height: 115,
    backgroundColor: "#d9d9d9",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
  },
  role: {
    color: "#ffffff",
    fontSize: 9,
    fontStyle: "italic",
    marginBottom: 5,
  },
  description: {
    color: "#ffffff",
    fontSize: 9,
    lineHeight: 11,
  },
  bottomRow: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    gap: 5,
  },
  icon: {
    color: "#000000",
    fontSize: 9,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  buttonText: {
    color: "#000000",
    fontSize: 8,
    fontWeight: "700",
  },

  currentStudentsSection: {
    padding: 24,
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  mobilePage: {
    width: 320,
    backgroundColor: "#ffffff",
    padding: 12,
    alignSelf: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 28,
    height: 28,
    backgroundColor: "#444444",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#ffffff",
    fontSize: 6,
  },
  menu: {
    gap: 4,
  },
  menuLine: {
    width: 22,
    height: 3,
    backgroundColor: "#111111",
  },
  hero: {
    backgroundColor: "#777777",
    paddingVertical: 7,
    alignItems: "center",
    marginBottom: 16,
  },
  heroText: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "700",
  },
  managementSection: {
    backgroundColor: "#4f4f4f",
    padding: 10,
  },
  managementTitle: {
    color: "#ffffff",
    fontSize: 7,
    borderWidth: 1,
    borderColor: "#007acc",
    alignSelf: "flex-start",
    paddingHorizontal: 4,
    marginBottom: 10,
  },
  cardStack: {
    gap: 10,
  },
  currentStudentsSmall: {
    marginTop: 14,
    paddingHorizontal: 8,
  },
  smallSectionTitle: {
    fontSize: 9,
    fontWeight: "700",
    marginBottom: 6,
  },
});