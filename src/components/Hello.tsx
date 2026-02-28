
import { View, Text, ScrollView } from 'react-native';
import ProfessionSection from "./ProfessionSection";

export default function Hello() {
  return (
    <ScrollView>
      <View>
        <ProfessionSection />
      </View>
    </ScrollView>
  );
}
