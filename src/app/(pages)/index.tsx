import { View, Text } from 'react-native';
import ClientSection from 'src/components/clientSection';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Page!</Text>
      <ClientSection />
    </View>
  );
}