import { ScrollView, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AlumniCard from '../../components/AlumniCard';
import AlumniGrid from '../../components/AlumniGrid';

export default function AlumniPage() {
  return (
    <LinearGradient
      colors={['#1C1C1C', '#7F7F7F']}   
      start={{ x: 0, y: 0 }}            
      end={{ x: 1, y: 0 }}              
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Our Alumni Accomplishments</Text>

        <AlumniGrid>
          <AlumniCard
            name="Ricky Bobby"
            role="Microsoft Engineer"
            quote="I am so happy in my new job. This program has
              changed my very soul and now I can see through time
              and reality itself. My brain has become so big from this
              app development program I needed a to buy a new
              head to fit it. BC is like a god in man's clothing."
          />

          <AlumniCard
            name="Ricky Bobby"
            role="Microsoft Engineer"
            quote="I am so happy in my new job. This program has
              changed my very soul and now I can see through time
              and reality itself. My brain has become so big from this
              app development program I needed a to buy a new
              head to fit it. BC is like a god in man's clothing."
          />

          <AlumniCard
            name="Ricky Bobby"
            role="Microsoft Engineer"
            quote="I am so happy in my new job. This program has
              changed my very soul and now I can see through time
              and reality itself. My brain has become so big from this
              app development program I needed a to buy a new
              head to fit it. BC is like a god in man's clothing."
          />
        </AlumniGrid>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: 'white',
  },
});