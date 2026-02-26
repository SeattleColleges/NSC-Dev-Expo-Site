// This file contains the Application Development page component for the NSC Dev Expo Site. 
// It imports the AppDevHeader component and renders it within a View container.

import { View } from 'react-native';
import AppDevHeader from '../../components/AppDevHeader';

export default function ApplicationDevelopmentPage() {
  return (
    <View style={{ flex: 1 }}>
      <AppDevHeader />
    </View>
  );
}