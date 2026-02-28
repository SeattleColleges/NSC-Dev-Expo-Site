import { View, Text } from 'react-native';
import Hello from '../../components/Hello';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
      <Hello/>
    </View>
  );
}