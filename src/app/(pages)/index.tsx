import { View, Text } from 'react-native';
import Hello from '../../components/Hello';
import MessageSuccess from 'src/components/MessageSuccess';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Page!</Text>
      <Hello/>
    </View>
  );
}