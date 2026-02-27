import { View, Text } from 'react-native';
import Hello from '../../components/Hello';
import InformationalSection from '../../components/InformationalSection/InformationalSection';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Page!</Text>
      <Hello/>

      <InformationalSection />
    </View>
  );
}