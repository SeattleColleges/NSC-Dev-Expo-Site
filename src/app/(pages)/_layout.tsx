import { Stack } from 'expo-router';
import { View } from "react-native";
import Navbar from "../../components/Navbar";

export default function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Navbar/>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: 'About',
          }}
        />
        <Stack.Screen
          name="contact"
          options={{
            title: 'Contact',
          }}
        />
        <Stack.Screen
          name="student"
          options={{
            title: 'Student',
          }}
        />
      </Stack>
    </View>
  );
}