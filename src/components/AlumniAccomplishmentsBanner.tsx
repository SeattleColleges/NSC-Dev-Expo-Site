import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AlumniCard, { AlumniRecord } from './AlumniCard';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isMobile = screenWidth < 768;

interface BannerProps {
  alumniList: AlumniRecord[];
}

const AlumniAccomplishmentsBanner: React.FC<BannerProps> = ({ alumniList }) => {
  return (
    <LinearGradient
      colors={['#1A1A1A', '#808080']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.bannerContainer}
    >
      <View style={styles.contentWrapper}>
        <Text style={styles.headerText}>
          Our Alumni Accomplishments
        </Text>

        {alumniList.map((alumni) => (
          <View key={alumni.id} style={styles.cardWrapper}>
            <AlumniCard alumni={alumni} />
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    minHeight: screenHeight,
    paddingTop: 12,
    paddingBottom: 30,
    paddingHorizontal: isMobile ? 16 : 40, 
    alignItems: 'center',
    width: '100%',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 600,
  },
  headerText: {
    color: '#E0E0E0',
    fontSize: isMobile ? 28 : 36, 
    fontWeight: '600',
    marginBottom: 48,
    textAlign: 'left',
    width: '100%',
  },
  cardWrapper: {
    marginBottom: 48,
    paddingHorizontal: isMobile ? 20 : 40, 
  }
});

export default AlumniAccomplishmentsBanner;