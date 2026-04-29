import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import Svg, { G, Path, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend } from "react-native-svg";

function BecomeStudentIcon() {
  return (
    <Svg width={62} height={50} viewBox="0 0 70 58" fill="none">
      <Defs>
        <Filter id="filter0_d_957_8088" x="0" y="0" width="70" height="58" filterUnits="userSpaceOnUse">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <FeOffset dy="4" />
          <FeGaussianBlur stdDeviation="2" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_957_8088" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_957_8088" result="shape" />
        </Filter>
      </Defs>
      <G filter="url(#filter0_d_957_8088)">
        <Path
          d="M43.525 24.375L55.925 17.1875L43.525 10L31.125 17.1875L43.525 24.375ZM43.525 33.9062L52.05 28.9062V22.3438L43.525 27.3438L35 22.3438V28.9062L43.525 33.9062ZM59.8 50H44.3C44.3 48.9583 44.2612 47.9167 44.1838 46.875C44.1063 45.8333 43.99 44.7917 43.835 43.75H59.8V6.25H10.2V9.84375C9.16667 9.6875 8.13333 9.57031 7.1 9.49219C6.06667 9.41406 5.03333 9.375 4 9.375V6.25C4 4.53125 4.60708 3.0599 5.82125 1.83594C7.03542 0.611979 8.495 0 10.2 0H59.8C61.505 0 62.9646 0.611979 64.1787 1.83594C65.3929 3.0599 66 4.53125 66 6.25V43.75C66 45.4688 65.3929 46.9401 64.1787 48.1641C62.9646 49.388 61.505 50 59.8 50ZM4 50V40.625C6.58333 40.625 8.77917 41.5365 10.5875 43.3594C12.3958 45.1823 13.3 47.3958 13.3 50H4ZM19.5 50C19.5 45.6771 17.9888 41.9922 14.9663 38.9453C11.9437 35.8984 8.28833 34.375 4 34.375V28.125C10.045 28.125 15.1729 30.2474 19.3837 34.4922C23.5946 38.737 25.7 43.9062 25.7 50H19.5ZM31.9 50C31.9 46.0938 31.1637 42.4349 29.6912 39.0234C28.2188 35.612 26.2296 32.6432 23.7238 30.1172C21.2179 27.5911 18.2729 25.5859 14.8888 24.1016C11.5046 22.6172 7.875 21.875 4 21.875V15.625C8.70167 15.625 13.1192 16.5234 17.2525 18.3203C21.3858 20.1172 25.0025 22.5781 28.1025 25.7031C31.2025 28.8281 33.6438 32.474 35.4263 36.6406C37.2088 40.8073 38.1 45.2604 38.1 50H31.9Z"
          fill="#EEEEEE"
        />
      </G>
    </Svg>
  );
}

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
