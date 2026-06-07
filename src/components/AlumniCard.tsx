import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const isMobile = screenWidth < 768;

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

const AlumniCard: React.FC<AlumniCardProps> = ({ alumni }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.textContainer}>
        <View style={styles.headerBox}>
          <Text style={styles.nameText}>{alumni.name}</Text>
          <Text style={styles.titleText}>{alumni.jobTitle}</Text>
        </View>
        <Text style={styles.quoteText}>{alumni.quote}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#555555',
    padding: 24, 
    paddingLeft: 12, // Overrides left padding to slide the image to the left
    paddingBottom: 36, // Overrides the bottom padding to be larger
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
  },
  imagePlaceholder: {
    width: 130,
    backgroundColor: '#D9D9D9',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  headerBox: {
    backgroundColor: '#111111',
    padding: 8,
    marginBottom: 10,
  },
  nameText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 11, 
    fontWeight: '400', 
    marginBottom: 2,
  },
  titleText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '400',
  },
  quoteText: {
    color: '#E0E0E0',
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 13,
  },
});

export default AlumniCard;