import { View, Text } from 'react-native';
import TalentSection from '../components/TalentSection';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Page!</Text>
        <TalentSection />
    </View>

  );
}