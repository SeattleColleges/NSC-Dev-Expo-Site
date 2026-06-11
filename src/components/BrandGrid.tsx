import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BrandCard } from './BrandCard';

// Shape for the array of brand items
interface BrandItem {
  id: string;
  title: string;
  IconComponent: React.ComponentType<{ width: number; height: number; fill?: string }>;
}

interface BrandGridProps {
  brands: BrandItem[];
}

export const BrandGrid = ({ brands }: BrandGridProps) => {
  return (
    <View style={styles.gridContainer}>
      {brands.map((item) => (
        <View key={item.id} style={styles.gridItem}>
          <BrandCard title={item.title} IconComponent={item.IconComponent} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400, // Keeps the grid compact like the Figma screenshot
  },
  gridItem: {
    width: '50%', // Splitting into a 2-column layout
    alignItems: 'center',
    marginVertical: 12,
  },
});