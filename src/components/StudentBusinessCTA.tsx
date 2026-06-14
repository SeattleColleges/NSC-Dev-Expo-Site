import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type StatItem = {
  value: string;
  label: string;
};

type BrandItem = {
  label: string;
  name: string;
};

type StudentBusinessCTAProps = {
  stats: StatItem[];
  brands: BrandItem[];
  studentTitle: string;
  studentButtonText: string;
  businessTitle: string;
  portfolioButtonText: string;
  footerText?: string;
};

export default function StudentBusinessCTA({
  stats,
  brands,
  studentTitle,
  studentButtonText,
  businessTitle,
  portfolioButtonText,
  footerText = "Or schedule a free class from here in shop with the edge of how they feel",
}: StudentBusinessCTAProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1A1A1A", "#808080"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.topSection}
      >
        <View style={styles.statsRow}>
          {stats.map((stat) => (
            <View key={`${stat.value}-${stat.label}`} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.studentCTA}>
          <Text style={styles.studentTitle}>{studentTitle}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{studentButtonText}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.orSection}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <LinearGradient
        colors={["#1A1A1A", "#808080"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.bottomSection}
      >
        <Text style={styles.businessTitle}>{businessTitle}</Text>

        <View style={styles.brandGrid}>
          {brands.map((brand) => (
            <View key={brand.name} style={styles.brandItem}>
              <Text style={styles.brandLabel}>{brand.label}</Text>
              <Text style={styles.brandName}>{brand.name}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.portfolioButton}>
          <Text style={styles.buttonText}>{portfolioButtonText}</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>{footerText}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    alignSelf: "center",
    overflow: "hidden",
    borderLeftWidth: 10,
    borderRightWidth: 6,
    borderColor: "#000000",
  },
  topSection: {
    paddingTop: 28,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 34,
  },
  statItem: {
    width: "31%",
    alignItems: "center",
  },
  statValue: {
    color: "#D9D9D9",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  statLabel: {
    color: "#D9D9D9",
    fontSize: 9,
    fontWeight: "700",
    lineHeight: 12,
    textAlign: "center",
  },
  studentCTA: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  studentTitle: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "700",
    lineHeight: 36,
    width: "60%",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
  orSection: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  orText: {
    color: "#000000",
    fontSize: 42,
    fontWeight: "800",
  },
  bottomSection: {
    paddingTop: 22,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  businessTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 26,
    width: "85%",
  },
  brandGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  brandItem: {
    width: "45%",
    alignItems: "center",
    marginBottom: 28,
  },
  brandLabel: {
    color: "#D9D9D9",
    fontSize: 7,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  brandName: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "center",
  },
  portfolioButton: {
    backgroundColor: "#000000",
    paddingVertical: 13,
    paddingHorizontal: 16,
    alignSelf: "center",
    marginBottom: 12,
  },
  footerText: {
    color: "#D9D9D9",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    alignSelf: "center",
    width: "70%",
  },
});