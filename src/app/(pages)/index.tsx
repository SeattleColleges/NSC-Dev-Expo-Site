import { View, Text } from 'react-native';
import Hello from '../../components/Hello';
<<<<<<< HEAD
import Hero from "../../components/Hero";
=======
import InformationalSection from '../../components/InformationalSection/InformationalSection';
>>>>>>> fdf1f3c (Issue04-Informational Section component)

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Hero />
      <Text>Welcome to the Home Page!</Text>
      <Hello/>

      <InformationalSection />
    </View>
  );
}