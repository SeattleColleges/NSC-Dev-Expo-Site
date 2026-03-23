import { View, Text } from 'react-native';
import AboutContent from '../../components/AboutContent';


export default function AboutPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the about Page!</Text>

      <AboutContent/>
    </View>
  );
}