import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export interface AlumniRecord {
  id: string;
  name: string;
  jobTitle: string;
  quote: string;
  imageUrl?: string;
}

interface AlumniCardProps {
  alumni: AlumniRecord;
}

// Refactored to a standard function component
function AlumniCard({ alumni }: AlumniCardProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = getStyles(isMobile);

  return (
    <View style={styles.cardContainer}>
      {alumni.imageUrl ? (
        <Image source={{ uri: alumni.imageUrl }} style={styles.imageBox} />
      ) : (
        <View style={styles.imageBox} />
      )}
      
      <View style={styles.textContainer}>
        <View style={styles.headerBox}>
          <Text style={styles.nameText}>{alumni.name}</Text>
          <Text style={styles.titleText}>{alumni.jobTitle}</Text>
        </View>
        <Text style={styles.quoteText}>{alumni.quote}</Text>
      </View>
    </View>
  );
}

const getStyles = (isMobile: boolean) => StyleSheet.create({
  cardContainer: {
    backgroundColor: '#555555',
    paddingTop: 24,
    paddingRight: isMobile ? 16 : 24,
    paddingLeft: 16, 
    paddingBottom: isMobile ? 28 : 36,
    flexDirection: 'row',
    alignItems: 'flex-start', 
    width: '100%',
  },
  imageBox: {
    width: isMobile ? 100 : 140,  
    height: isMobile ? 115 : 160, 
    backgroundColor: '#D9D9D9',
    marginRight: isMobile ? 12 : 16, 
  },
  textContainer: {
    flex: 1,
  },
  headerBox: {
    backgroundColor: '#111111',
    padding: 10,
    marginBottom: 12,
  },
  nameText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 16, 
    fontWeight: '400', 
    marginBottom: 2,
  },
  titleText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 14, 
  },
  quoteText: {
    color: '#E0E0E0',
    fontFamily: 'Inter',
    fontSize: isMobile ? 13 : 14, 
    lineHeight: isMobile ? 18 : 20,
  },
});

export default AlumniCard;