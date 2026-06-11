import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AlumniCard, { AlumniRecord } from './AlumniCard';

interface BannerProps {
  alumniList: AlumniRecord[];
}

// Refactored to a standard function component
function AlumniAccomplishmentsBanner({ alumniList }: BannerProps) {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = getStyles(isMobile, height);

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
}

const getStyles = (isMobile: boolean, screenHeight: number) => StyleSheet.create({
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
    fontFamily: 'Roboto',
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