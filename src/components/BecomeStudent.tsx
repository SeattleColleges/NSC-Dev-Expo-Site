import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import BecomeStudentIcon from "../../assets/BecomeStudentIcon";

type BecomeStudentProps = {
  onEnroll?: (e?: GestureResponderEvent) => void;
};

export default function BecomeStudent({
  onEnroll = () => console.log("Enroll Now pressed"),
}: BecomeStudentProps) {
  const screenWidth = Dimensions.get("window").width;
  const panelWidth = Math.min(468, Math.max(screenWidth - 80, 280));
  const headerWidth = Math.min(622, Math.max(screenWidth - 64, panelWidth + 64));

  return (
    <View style={styles.wrapper}>
      <View style={[styles.headerBar, { width: headerWidth }]}>
        <Text style={styles.headerTitle}>Become a Student</Text>
      </View>

      <View style={[styles.card, { width: panelWidth }]}>
        <BecomeStudentIcon />

        <Text style={styles.bodyText}>Want to learn modern high{"\n"}demand skills?</Text>

        <Text style={styles.bodyTextSecondary}>Come and check out our{"\n"}App Development program.</Text>

        <Pressable style={styles.enrollButton} onPress={onEnroll}>
          <Text style={styles.enrollText}>Enroll Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    paddingTop: 0,
    paddingBottom: 6,
    minHeight: 685,
  },
  headerBar: {
    position: "absolute",
    top: 30,
    backgroundColor: "#575757",
    height: 94,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  headerTitle: {
    color: "#ffffff",
    fontFamily: "Inter",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 58,
  },
  card: {
    marginTop: 0,
    backgroundColor: "#9C9C9C",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 0,
    minHeight: 477,
    paddingTop: 164,
    paddingBottom: 58,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bodyText: {
    color: "#ffffff",
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 28,
    marginTop: 34,
    marginBottom: 24,
  },
  bodyTextSecondary: {
    color: "#ffffff",
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 92,
  },
  enrollButton: {
    backgroundColor: "#404040",
    width: 265,
    height: 90,
    borderRadius: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  enrollText: {
    color: "#ffffff",
    fontFamily: "Inter",
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 40,
  },
});
