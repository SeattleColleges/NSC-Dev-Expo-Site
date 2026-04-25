import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontTest from 'src/components/FontTest';

export default function TestPage() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Colors for the gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
    > 
      </LinearGradient>
      <FontTest/>
      <FontTest font1='Roboto' font2='Inter'/>
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
