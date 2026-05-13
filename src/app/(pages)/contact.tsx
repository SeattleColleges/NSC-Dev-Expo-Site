import { ScrollView, StyleSheet } from "react-native";
import HeaderWithStats from "../../components/HeaderWithStats";

const contactStats = [
  { value: '3', description: 'Departments to aid you business' },
  { value: '6', description: 'commercial projects finished' },
  { value: '100%', description: 'Client Satisfaction' },
];

export default function ContactPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderWithStats stats={contactStats} page="contact" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
