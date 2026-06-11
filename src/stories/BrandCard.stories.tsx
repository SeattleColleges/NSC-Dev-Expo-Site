import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BrandCard } from '../components/BrandCard'; 
import { BrandGrid } from '../components/BrandGrid'; 

export default {
  title: 'Components/BrandCard',
  component: BrandCard,
  decorators: [
    (Story: React.ComponentType) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
};

// A simple, minimalist SVG placeholder icon for testing
const SampleIcon = (props: { width: number; height: number; fill?: string }) => (
  <View 
    style={{ 
      width: props.width, 
      height: props.height, 
      backgroundColor: props.fill || '#fff', 
      borderRadius: 4 
    }} 
  />
);

// First "Story" case
export const GirlGeekCon = () => (
  <BrandCard title="Girl Geek Con" IconComponent={SampleIcon} />
);

// Second case 
export const PelletierConstruction = () => (
  <BrandCard title="Pelletier Construction" IconComponent={SampleIcon} />
);

// --- Full Grid Story ---
const mockBrands = [
  { id: '1', title: 'Girl Geek Con', IconComponent: SampleIcon },
  { id: '2', title: "Belinda's Closet", IconComponent: SampleIcon },
  { id: '3', title: 'NSC Events', IconComponent: SampleIcon },
  { id: '4', title: 'Pelletier Construction', IconComponent: SampleIcon },
];

export const FullBrandGrid = () => (
  <BrandGrid brands={mockBrands} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Matching the dark theme from your Figma image
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});