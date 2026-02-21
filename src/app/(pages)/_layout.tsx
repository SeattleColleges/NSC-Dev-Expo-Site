import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
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
      <Stack.Screen
        name="facultyandstaff"
        options={{
          title: 'Faculty and Staff',
        }}
      />
    </Stack>
  );
}