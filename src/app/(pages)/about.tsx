import { View, Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import DesignProcessOutline from "../../components/DesignProcessOutline";

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome to the About Page!</Text>
      </View>
      <DesignProcessOutline pageName="About" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#333",
  },
});
