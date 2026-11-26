import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HamburgerButton from "./HamburgerButton";

interface StudentPageBannerProps {
  title?: string;
  logoText?: string;
  menuAccessibilityLabel?: string;
  onMenuPress?: () => void;
}

function defaultAction() {}

export default function StudentPageBanner({
  title = "See the talent of the future",
  logoText = "LOGO",
  menuAccessibilityLabel = "Open menu",
  onMenuPress = defaultAction,
}: StudentPageBannerProps) {
  const { width } = useWindowDimensions();
  const isTabletUp = width >= 768;
  const isNarrowMobile = width <= 360;

  const horizontalPadding = isTabletUp ? 42 : isNarrowMobile ? 16 : 24;
  const navBottomGap = isNarrowMobile ? 32 : 47;
  const logoSize = isTabletUp ? 121 : isNarrowMobile ? 88 : 104;
  const menuSize = isTabletUp ? 100 : isNarrowMobile ? 72 : 84;
  const headlineSize = isTabletUp ? 40 : isNarrowMobile ? 30 : 34;

  return (
    <View style={styles.page}>
      <View
        style={[
          styles.content,
          {
            paddingTop: 30,
            paddingHorizontal: horizontalPadding,
          },
        ]}
      >
        <View style={[styles.navRow, { marginBottom: navBottomGap }]}>
          <View style={[styles.logoBox, { width: logoSize, height: logoSize }]}>
            <Text
              style={[
                styles.logoText,
                {
                  fontSize: logoSize * 0.3,
                  lineHeight: logoSize * 0.36,
                },
              ]}
            >
              {logoText}
            </Text>
          </View>

          <HamburgerButton
            accessibilityLabel={menuAccessibilityLabel}
            onPress={onMenuPress}
            size={menuSize}
            style={{
              alignItems: "flex-end",
              minHeight: menuSize,
              minWidth: menuSize,
            }}
          />
        </View>

        <LinearGradient
          colors={["#1A1A1A", "#808080"]}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={[
            styles.hero,
            {
              paddingHorizontal: isNarrowMobile ? 16 : 20,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                fontSize: headlineSize,
                lineHeight: headlineSize * 1.2,
              },
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  content: {
    width: "100%",
    alignSelf: "center",
    maxWidth: 784,
  },
  navRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  logoBox: {
    alignItems: "center",
    backgroundColor: "#525252",
    flexShrink: 0,
    justifyContent: "center",
  },
  logoText: {
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontWeight: "400",
    textAlign: "center",
  },
  hero: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 117,
    paddingVertical: 24,
    width: "100%",
  },
  title: {
    color: "#E8E8E8",
    flexShrink: 1,
    fontFamily: "Roboto",
    fontWeight: "700",
    maxWidth: "100%",
    textAlign: "center",
    width: "100%",
  },
});
