import { View, StyleSheet, useWindowDimensions } from "react-native";
import InfoFeatureCard from "./InfoFeatureCard";
import InfoTextCard from "./InfoTextCard";
import InfoStatCard from "./InfoStatCard";

export default function InformationalSection() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1200;

  if (isDesktop) {
    return (
      <View style={styles.desktopContainer}>
        <InfoFeatureCard
          title="The Process"
          description={`Find out how the App Development program works for you.

Grow your business or non-profit for free.`}
          stat="10+"
          statDescription="Departments within our school to build your business"
          href="/process"
        />

        <InfoFeatureCard
          title="Our Portfolio"
          description="Check out all our previous projects and case studies."
          stat="6"
          statDescription="Commercial projects under our belt"
          href="/portfolio"
        />

        <InfoFeatureCard
          title="Become a Student"
          description={`Want to learn modern high demand skills?

Come and check out our App Development program.`}
          stat="80%"
          statDescription="of students find gainful employment"
          href="/student"
        />
      </View>
    );
  }

  // MOBILE LAYOUT
  return (
    <View style={styles.mobileContainer}>
      <InfoTextCard
        title="The Process"
        description={`Find out how the App Development program works for you.

Grow your business or non-profit for free.`}
        linkText="See more details"
        href="/process"
      />

      <InfoStatCard
        value="10+"
        description="Departments within our school to build your business"
      />

      <InfoStatCard
        value="6"
        description="Commercial projects under our belt"
      />

      <InfoTextCard
        title="Our Portfolio"
        description="Check out all our previous projects and case studies."
        linkText="See more details"
        href="/portfolio"
      />

      <InfoTextCard
        title="Become a Student"
        description={`Want to learn modern high demand skills?

Come and check out our App Development program.`}
        linkText="See more details"
        href="/student"
      />

      <InfoStatCard
        value="80%"
        description="of students find gainful employment"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  desktopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 60,
  },

  mobileContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});