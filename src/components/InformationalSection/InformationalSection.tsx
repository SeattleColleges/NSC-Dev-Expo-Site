import { View, StyleSheet, useWindowDimensions } from "react-native";
import InfoTextCard from "./InfoTextCard";
import InfoStatCard from "./InfoStatCard";
import InfoCardDesktop from "./InfoCardDesktop";

export default function InformationalSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 900;

  return isDesktop ? (
    // desktop
    <View style={styles.desktopContainer}>
      <InfoCardDesktop
        title="The Process"
        description={`Find out how the App Development program works for you.

Grow your business or non-profit for free.`}
        value="10+"
        statDescription="Departments within our school to build your business"
        linkText="See more details"
      />

      <InfoCardDesktop
        title="Our Portfolio"
        description="Check out all our previous projects and case studies."
        value="6"
        statDescription="Commercial projects under our belt"
        linkText="See more details"
      />

      <InfoCardDesktop
        title="Become a Student"
        description={`Want to learn modern high demand skills?

Come and check out our App Development program.`}
        value="80%"
        statDescription="of students find gainful employment"
        linkText="See more details"
      />
    </View>
  ) : (
    // mobile
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
  // mobile
  mobileContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },

  // desktop
  desktopContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    gap: 30,
  },
});