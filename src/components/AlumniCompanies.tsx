import { View, Text, StyleSheet } from "react-native";
import CompanyCard from "./CompanyCard";
import { ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Company = {
  name: string;
  logo?: ImageSourcePropType;
};

const companies: Company[] = [
  { name: "Company1" },
  { name: "Company2" },
  { name: "Company3" },
  { name: "Company4" },
  { name: "Company5" },
  { name: "Company6" },
  { name: "Company7" },
  { name: "Company8" },

];

export default function AlumniCompanies() {
  return (
    <LinearGradient 
        colors={["#1A1A1A", "#808080"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}>
      <Text style={styles.title}>Where our Alumni are now</Text>

      <View style={styles.grid}>
        {companies.map((c, i) => (
          <CompanyCard key={i} name={c.name} logo={c.logo} />
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    color: "#E0E0E0",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  gradient: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: "100%",

  },
  
});