import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AppDevHeader() {
  return (
    <View style={styles.container}>
      {/* Tagline */}
      <Text style={styles.tagline}>
        Want to learn on demand IT industry skills?
      </Text>

      {/* Program Info */}
      <View style={styles.programBlock}>
        <Text style={styles.school}>North Seattle College</Text>
        <Text style={styles.program}>Application Development</Text>
        <Text style={styles.degree}>Bachelor of Applied Science Degree (BAS)</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.infoText}>Request Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles for the AppDevHeader component
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 24,
  },

  tagline: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  programBlock: {
    alignItems: "center",
    gap: 4,
  },

  school: {
    fontSize: 16,
    fontWeight: "500",
  },

  program: {
    fontSize: 22,
    fontWeight: "700",
  },

  degree: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
    textAlign: "center",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 12,
  },

  Button: {
    backgroundColor: "#1E40AF", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  applyText: {
    color: "#ffffff",
    fontWeight: "600",
    paddingHorizontal: 16,
  },

  infoButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#1E40AF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  infoText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});