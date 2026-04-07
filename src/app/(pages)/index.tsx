import { View, Text } from 'react-native';
import Hello from '../../components/Hello';
import Hero from "../../components/Hero";
import ProjectDetails from 'src/components/ProjectDetails';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Hero />
      <Text>Welcome to the Home Page!</Text>
      <Hello/>
      <ProjectDetails/>
    </View>
  );
}