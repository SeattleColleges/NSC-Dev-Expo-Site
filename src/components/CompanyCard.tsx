import { View, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";

type CompanyCardProps = {
  name: string;
  logo?: ImageSourcePropType;
};

export default function CompanyCard({ name, logo }: CompanyCardProps) {
  return (
    <View style={styles.card}>
      {logo ? (
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      ) : (
        <View style={styles.grayBox}>
          <Text style={styles.grayText}>
            Company Logo*{"\n"}Company Name
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100, 
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    backgroundColor: "#666666",
  },
  logo: {
    width: "70%",
    height: "70%",
  },
  fallback: {
    textAlign: "center",
    fontSize: 12,
    
    paddingHorizontal: 4,
  },
  grayBox: {
    width: "70%",
    height: "70%",
    backgroundColor: "#666666",
    
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 6,
  },
  grayText: {
    fontSize: 10,
    color: "#FFFFFF",
    textAlign: "left",
    lineHeight: 12,
    marginTop: 24,
    marginBottom: 10,
  },
});