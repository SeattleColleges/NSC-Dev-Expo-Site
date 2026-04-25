import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Hello from '../../components/Hello';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Hero />

      <View style={styles.mainContent}>
        <Text style={styles.welcomeText}>Welcome to the Home Page!</Text>
        <Hello />
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  mainContent: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});
