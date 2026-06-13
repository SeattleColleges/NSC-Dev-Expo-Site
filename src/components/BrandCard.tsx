import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Define the shape of the data this component expects
interface BrandCardProps {
  title: string;
  IconComponent: React.ComponentType<{ width: number; height: number; fill?: string }>;
}

export const BrandCard = ({ title, IconComponent }: BrandCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.labelText}>Icon of brand*</Text>
      {/* Brand Icon Placeholder */}

       {/* Brand Title Text */}
      <Text style={styles.titleText}>{title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  iconWrapper: {
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#D9D9D9',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 38,
  },
  labelText: {
    color: '#D9D9D9',       // Muted gray to match the secondary look in Figma
    fontSize: 14,           // Smaller font size for sub-labels
    textAlign: 'center',
    fontWeight: '400',
  },
});