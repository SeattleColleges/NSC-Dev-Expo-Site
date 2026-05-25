import { ScrollView, StyleSheet } from "react-native";
import DesignProcessOutline from "../../components/DesignProcessOutline";

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DesignProcessOutline />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
