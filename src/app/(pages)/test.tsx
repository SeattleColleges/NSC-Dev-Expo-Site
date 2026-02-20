import { View, Text ,StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    gradient: {
        width: '80%', // Adjust size as needed
        height: 200,
        borderRadius: 15,
    }
});
