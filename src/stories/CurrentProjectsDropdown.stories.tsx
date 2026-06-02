import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CurrentProjectsDropdown from "../components/CurrentProjectsDropdown/StudentCard";

export default {
  title: "Components/CurrentProjectsDropdown",
  component: CurrentProjectsDropdown,
};

export const Default = {
  render: () => (
    <View style={styles.phone}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>

        <View style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
      </View>

      <CurrentProjectsDropdown />

      <View style={styles.projectContent}>
        <Text style={styles.projectTitle}>Belinda&apos;s Closet</Text>

        <View style={styles.textBox}>
          <Text style={styles.paragraph}>
            Belinda&apos;s Closet emerged in the fall of 2022 to address the
            growing need among students for suitable attire for the graduation
            job, fit check-response to the need.
          </Text>

          <Text style={styles.paragraph}>
            Currently situated within the Equity & Welcome Center at North
            Seattle College, Belinda&apos;s Closet is easily shoppable during
            designated open hours.
          </Text>
        </View>

        <View style={styles.goalSection}>
          <Text style={styles.goalTitle}>The Goal</Text>
        </View>
      </View>
    </View>
  ),
};

export const ProjectSelectionMenu = {
  render: () => (
    <View style={styles.phoneDark}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>

        <View style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
      </View>

      <View style={styles.menuPreview}>
        <Text style={styles.menuPreviewTitle}>Select Projects ‹</Text>

        <View style={styles.optionLight}>
          <Text style={styles.optionTitle}>Next Wave Dev</Text>
          <Text style={styles.optionSubtitle}>Digital signage</Text>
        </View>

        <View style={styles.optionDark}>
          <Text style={styles.optionDarkTitle}>Belinda&apos;s Closet</Text>
          <Text style={styles.optionDarkSubtitle}>Static webpage</Text>
        </View>

        <View style={styles.optionLight}>
          <Text style={styles.optionTitle}>NSC Events</Text>
          <Text style={styles.optionSubtitle}>Static webpage</Text>
        </View>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  phone: {
    width: 250,
    backgroundColor: "#2f2f2f",
  },
  phoneDark: {
    width: 250,
    backgroundColor: "#333333",
    minHeight: 420,
  },
  header: {
    height: 82,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 26,
  },
  logo: {
    width: 44,
    height: 44,
    backgroundColor: "#595959",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#ffffff",
    fontSize: 10,
  },
  menuIcon: {
    height: 26,
    justifyContent: "space-between",
  },
  menuLine: {
    width: 34,
    height: 4,
    backgroundColor: "#111111",
    borderRadius: 2,
  },
  projectContent: {
    backgroundColor: "#2f2f2f",
  },
  projectTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 28,
    paddingTop: 12,
    paddingBottom: 6,
  },
  textBox: {
    backgroundColor: "#ffffff",
    marginHorizontal: 28,
    padding: 14,
    minHeight: 160,
  },
  paragraph: {
    color: "#111111",
    fontSize: 8,
    lineHeight: 12,
    marginBottom: 14,
  },
  goalSection: {
    backgroundColor: "#4a4a4a",
    marginTop: 0,
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
  goalTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  menuPreview: {
    backgroundColor: "#4a4a4a",
    margin: 16,
    padding: 14,
  },
  menuPreviewTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 18,
  },
  optionLight: {
    backgroundColor: "#d9d9d9",
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 14,
  },
  optionDark: {
    backgroundColor: "#000000",
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 14,
  },
  optionTitle: {
    color: "#111111",
    fontSize: 14,
    fontWeight: "700",
  },
  optionSubtitle: {
    color: "#777777",
    fontSize: 8,
    marginTop: 4,
  },
  optionDarkTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },
  optionDarkSubtitle: {
    color: "#ffffff",
    fontSize: 8,
    marginTop: 4,
  },
});