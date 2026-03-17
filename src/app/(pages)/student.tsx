import { View, Text } from "react-native";
import AlumniSection from "../../components/AlumniSection";

export default function StudentPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Student Page!</Text>

      <AlumniSection />
    </View>
  );
}
