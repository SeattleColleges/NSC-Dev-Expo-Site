import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StudentCard from "../components/StudentCard";

export default {
  title: "Components/StudentCard",
  component: StudentCard,
};

const baseStudent = {
  name: "Sammy Wanner",
  role: "Design Lead",
  description:
    "I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs.",
  githubUrl: "https://github.com",
  linkedInUrl: "https://linkedin.com",
  studentPageUrl: "https://example.com",
};

export const Default = {
  args: baseStudent,
};

export const WithButtonPropsWired = {
  args: {
    ...baseStudent,
    studentPageUrl: "https://example.com/student",
  },
};

export const CurrentStudentManagementTeam = {
  render: () => (
    <View style={styles.mobilePage}>
      <View style={styles.header}>
        <View style={styles.logoBox}>
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

      <View style={styles.whiteGap} />

      <View style={styles.darkSection}>
        <Text style={styles.sectionLabel}>Current student management team</Text>

        <StudentCard {...baseStudent} />
        <StudentCard {...baseStudent} />
        <StudentCard {...baseStudent} />
        <StudentCard {...baseStudent} />
      </View>

      <View style={styles.lightSection}>
        <Text style={styles.lightTitle}>Current Students</Text>
        <StudentCard {...baseStudent} />
      </View>
    </View>
  ),
};

export const CurrentStudents = {
  render: () => (
    <View style={styles.lightSection}>
      <Text style={styles.lightTitle}>Current Students</Text>
      <StudentCard {...baseStudent} />
    </View>
  ),
};

const styles = StyleSheet.create({
  mobilePage: {
    width: 390,
    backgroundColor: "#1E1E1E",
  },
  header: {
    height: 86,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logoBox: {
    width: 56,
    height: 56,
    backgroundColor: "#595959",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  menu: {
    height: 30,
    justifyContent: "space-between",
  },
  menuLine: {
    width: 42,
    height: 4,
    backgroundColor: "#000000",
    borderRadius: 2,
  },
  hero: {
    height: 52,
    backgroundColor: "#747474",
    justifyContent: "center",
    alignItems: "center",
  },
  heroText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  whiteGap: {
    height: 70,
    backgroundColor: "#FFFFFF",
  },
  darkSection: {
    backgroundColor: "#4A4A4A",
    paddingTop: 26,
    paddingHorizontal: 24,
    paddingBottom: 28,
  },
  sectionLabel: {
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#1399FF",
    paddingVertical: 3,
    paddingHorizontal: 4,
    marginBottom: 22,
  },
  lightSection: {
    backgroundColor: "#FFFFFF",
    paddingTop: 28,
    paddingHorizontal: 24,
    paddingBottom: 28,
  },
  lightTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },
});