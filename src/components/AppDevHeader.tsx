import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AppDevHeader() {
  return (
    <View style={styles.outerContainer}>
      {/* Tagline */}
      <Text style={styles.tagline}>
        Want to learn on demand IT industry skills?
      </Text>

      {/* Gradient Header Block */}
      <LinearGradient
        colors={["#1a1a1a", "#666666"]}
        style={styles.headerBlock}
      >
        <Text style={styles.school}>North Seattle College</Text>
        <Text style={styles.program}>Application Development</Text>
        <Text style={styles.degree}>
          Bachelor of Applied Science{"\n"}Degree (BAS)
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.buttonText}>Request Info</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#fff",
  },

  tagline: {
    fontSize: 18,
    fontWeight: "700",
    padding: 20,
    textAlign: "left",
  },

  headerBlock: {
    padding: 24,
    alignItems: "flex-start",
    width: "100%",
  },

  school: {
    color: "#ccc",
    fontSize: 18,
    fontWeight: "500",
  },

  program: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    marginVertical: 8,
  },

  degree: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },

  applyButton: {
    backgroundColor: "#444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  infoButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  
});