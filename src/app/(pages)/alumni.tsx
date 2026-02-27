import { View, ScrollView, Text } from 'react-native';
import AlumniCard from '../../components/Alumni/AlumniCard';
import AlumniGrid from '../../components/Alumni/AlumniGrid';

export default function AlumniPage() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' }}>
        Our Alumni Accomplishments
      </Text>

      <AlumniGrid>
        <AlumniCard
          profileImg="/images/ricky.png"
          name="Ricky Bobby"
          role="Microsoft Engineer"
          companyIcons={["/icons/ms.png", "/icons/github.png"]}
          quote="I am so happy in my new job. This program has
            changed my very soul and now I can see through time
            and reality itself. My brain has become so big from this
            app development program I needed a to buy a new
            head to fit it. BC is like a god in man's clothing."
        />

        <AlumniCard
          profileImg="/images/ricky.png"
          name="Ricky Bobby"
          role="Microsoft Engineer"
          companyIcons={["/icons/ms.png", "/icons/github.png"]}
          quote="I am so happy in my new job. This program has
            changed my very soul and now I can see through time
            and reality itself. My brain has become so big from this
            app development program I needed a to buy a new
            head to fit it. BC is like a god in man's clothing."
        />

        <AlumniCard
          profileImg="/images/ricky.png"
          name="Ricky Bobby"
          role="Microsoft Engineer"
          companyIcons={["/icons/ms.png", "/icons/github.png"]}
          quote="I am so happy in my new job. This program has
            changed my very soul and now I can see through time
            and reality itself. My brain has become so big from this
            app development program I needed a to buy a new
            head to fit it. BC is like a god in man's clothing."
        />
      </AlumniGrid>
    </ScrollView>
  );
}