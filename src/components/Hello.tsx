
import { View, Text } from 'react-native';
import ProfessionSection from "./ProfessionSection";

export default function Hello() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello from the helloFunc component file!</Text>
      <ProfessionSection />
    </View>
  );
}
