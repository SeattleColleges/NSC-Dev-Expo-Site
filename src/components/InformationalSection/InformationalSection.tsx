import { View, StyleSheet } from "react-native";
import InfoTextCard from "./InfoTextCard";
import InfoStatCard from "./InfoStatCard";

export default function InformationalSection() {
  return (
    <View style={styles.container}>
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
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});