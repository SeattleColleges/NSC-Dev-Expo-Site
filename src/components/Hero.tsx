import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeroCTAButton from "./HeroCTAButton";

type HeroContentBlock =
  | {
      type: "text";
      heading?: string;
      body: string;
      bodyWeight?: "400" | "600";
      maxWidth?: number;
      offsetLeft?: number;
    }
  | {
      type: "image";
      width: number;
      height: number;
      label?: string;
      offsetLeft?: number;
    };

type HeroProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonPress?: () => void;
  pageName?: string;
  infoHeading?: string;
  infoDescription?: string;
  contentBlocks?: HeroContentBlock[];
};

function defaultAction() {
  console.log("CTA button pressed");
}

export default function Hero({
  title = "North Seattle Application Development",
  subtitle = "Developing IT students of the future",
  buttonLabel = "Join Us",
  onButtonPress = defaultAction,
  pageName = "home",
  infoHeading,
  infoDescription,
  contentBlocks,
}: HeroProps) {
  const { width: windowWidth } = useWindowDimensions();
  const isStudentStory = pageName === "student-story";
  const isAboutPage = pageName === "about";
  const aboutFrameWidth = Math.min(windowWidth, 700);
  const aboutTitleOffset = Math.min(42, Math.max(16, Math.floor(windowWidth * 0.05)));

  return (
    <View style={styles.hero}>
      <LinearGradient
        colors={
            isStudentStory
            ? ["#3a3a3a", "#5a5a5a"]
            : ["#1A1A1A", "#808080"]
        }
        style={[
          styles.gradientBackground,
          isAboutPage && styles.aboutGradientBackground,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={[styles.textContainer, isAboutPage && styles.aboutTextContainer]}>
          <Text
            style={[
              styles.headingText,
              isAboutPage && styles.aboutHeadingText,
              isAboutPage && {
                maxWidth: aboutFrameWidth - aboutTitleOffset,
                paddingLeft: aboutTitleOffset,
              },
            ]}
          >
            {title}
          </Text>
          {!isAboutPage && subtitle ? (
            <Text style={styles.subHeadingText}>{subtitle}</Text>
          ) : null}
        </View>
      </LinearGradient>

      {isStudentStory && (
        <View style={styles.infoSection}>
            <Text style={styles.infoHeading}>{infoHeading}</Text>
            <Text style={styles.infoDescription}>{infoDescription}</Text>
        </View>
      )}

      {isAboutPage && contentBlocks?.length ? (
        <View style={styles.aboutContentSection}>
          {contentBlocks.map((block, index) => {
            if (block.type === "image") {
              const desiredOffset = block.offsetLeft ?? 0;
              const safeOffset = Math.min(
                desiredOffset,
                Math.max(0, aboutFrameWidth - Math.min(block.width, aboutFrameWidth)),
              );
              const safeWidth = Math.min(block.width, aboutFrameWidth - safeOffset);

              return (
                <View
                  key={`image-${index}`}
                  style={[
                    styles.imagePlaceholder,
                    {
                      maxWidth: safeWidth,
                      aspectRatio: block.width / block.height,
                      marginLeft: safeOffset,
                    },
                  ]}
                >
                  {block.label ? (
                    <Text style={styles.imagePlaceholderText}>{block.label}</Text>
                  ) : null}
                </View>
              );
            }

            const desiredOffset = block.offsetLeft ?? 0;
            const desiredWidth = block.maxWidth ?? 600;
            const safeOffset = Math.min(
              desiredOffset,
              Math.max(0, aboutFrameWidth - Math.min(desiredWidth, aboutFrameWidth)),
            );
            const safeWidth = Math.min(desiredWidth, aboutFrameWidth - safeOffset);

            return (
              <View
                key={`text-${index}`}
                style={[
                  styles.textBlock,
                  {
                    maxWidth: safeWidth,
                    marginLeft: safeOffset,
                  },
                ]}
              >
                {block.heading ? (
                  <Text style={styles.aboutBlockHeading}>{block.heading}</Text>
                ) : null}
                <Text
                  style={[
                    styles.aboutBlockBody,
                    block.bodyWeight === "600" && styles.aboutBlockBodySemibold,
                  ]}
                >
                  {block.body}
                </Text>
              </View>
            );
          })}
        </View>
      ) : null}

      {!isStudentStory && !isAboutPage && (
        <HeroCTAButton
          accessibilityRole="button"
          label={buttonLabel}
          onPress={onButtonPress}
          style={styles.floatingButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "white",
    paddingTop: 60,
  },
  textContainer: {
    paddingLeft: 24,
    paddingVertical: 32,
  },
  aboutTextContainer: {
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
    paddingLeft: 0,
  },
  headingText: {
    fontSize: 32,
    color: "#E5E5E5",
    fontWeight: "600",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  aboutHeadingText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 64,
    lineHeight: 64,
    color: "#DEDDDD",
    marginBottom: 0,
    letterSpacing: 0,
  },
  subHeadingText: {
    fontSize: 16,
    color: "#E5E5E5",
  },
  gradientBackground: {
    width: "100%",
  },
  aboutGradientBackground: {
    maxWidth: 700,
    minHeight: 280,
    justifyContent: "center",
    alignSelf: "center",
  },
  infoSection: {
    backgroundColor: "#EDEDED",
    padding: 20,
  },
  infoHeading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  infoDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  floatingButton: {
    margin: 24,
  },
  aboutContentSection: {
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
    paddingHorizontal: 0,
    paddingTop: 24,
    paddingBottom: 48,
    gap: 24,
  },
  textBlock: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "flex-start",
    gap: 8,
  },
  aboutBlockHeading: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 24,
    lineHeight: 35,
    fontWeight: "600",
    color: "#000000",
    letterSpacing: 0,
  },
  aboutBlockBody: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 24,
    lineHeight: 35,
    fontWeight: "400",
    color: "#000000",
    letterSpacing: 0,
  },
  aboutBlockBodySemibold: {
    fontWeight: "600",
  },
  imagePlaceholder: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  imagePlaceholderText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 20,
    fontWeight: "500",
    color: "#555555",
  },
});
 
