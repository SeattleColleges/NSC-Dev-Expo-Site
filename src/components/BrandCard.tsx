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
    padding: 16,
    width: 160,
  },
  iconWrapper: {
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
  labelText: {
    color: '#A0A0A0',       // Muted gray to match the secondary look in Figma
    fontSize: 12,           // Smaller font size for sub-labels
    marginBottom: 6,        // Space between the label and the icon below it
    textAlign: 'center',
  },
});