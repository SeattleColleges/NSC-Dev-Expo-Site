import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  useWindowDimensions,
} from "react-native";
import BecomeStudentIcon from "../../assets/BecomeStudentIcon";

type BecomeStudentProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onEnroll?: (e?: GestureResponderEvent) => void;
};

export default function BecomeStudent({
  title = "Become a Student",
  description = "Want to learn modern high\ndemand skills?\nCome and check out our\nApp Development program.",
  ctaLabel = "Enroll Now",
  onEnroll = () => console.log("Enroll Now pressed"),
}: BecomeStudentProps) {
  const { width: screenWidth } = useWindowDimensions();
  const horizontalGutter = 20;
  const availableWidth = Math.max(screenWidth - horizontalGutter * 2, 0);
  const panelWidth = Math.min(468, availableWidth);
  const headerWidth = Math.min(622, availableWidth, panelWidth + 64);
  const isNarrow = screenWidth < 480;
  const descriptionLines = description.split("\n");
  const midpoint = Math.ceil(descriptionLines.length / 2);
  const primaryDescription = descriptionLines.slice(0, midpoint).join("\n");
  const secondaryDescription = descriptionLines.slice(midpoint).join("\n");

  return (
    <View style={styles.wrapper}>
      <View style={[styles.headerBar, { width: headerWidth }]}>
        <Text
          style={[
            styles.headerTitle,
            isNarrow && styles.headerTitleNarrow,
          ]}
        >
          {title}
        </Text>
      </View>

      <View style={[styles.card, { width: panelWidth }]}>
        <BecomeStudentIcon />

        <Text style={styles.bodyText}>{primaryDescription}</Text>

        <Text style={styles.bodyTextSecondary}>{secondaryDescription}</Text>

        <Pressable style={styles.enrollButton} onPress={onEnroll}>
          <Text style={styles.enrollText}>{ctaLabel}</Text>
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
    paddingHorizontal: 20,
    minHeight: 685,
  },
  headerBar: {
    position: "absolute",
    top: 30,
    backgroundColor: "#575757",
    minHeight: 94,
    paddingVertical: 16,
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
  headerTitleNarrow: {
    fontSize: 40,
    lineHeight: 44,
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
    width: "100%",
    maxWidth: 265,
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
