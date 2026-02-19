import { View, Text } from 'react-native';
import PortfolioStats from '../../../components/PortfolioStats';

export default function TestPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PortfolioStats 
        completed="50"
        ongoing="10"
        students="200"
        hours="5000"
      />

    </View>
  );
}