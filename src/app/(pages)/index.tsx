import { ScrollView, Text, View } from 'react-native';
import Hello from '../../components/Hello';
import InformationalSection from '../../components/InformationalSection/InformationalSection';
import Hero from "../../components/Hero";

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Hero />
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text>Welcome to the Home Page!</Text>
      </View>
      <Hello />
      <InformationalSection />
    </ScrollView>
  );
}