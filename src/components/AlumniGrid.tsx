import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { ReactNode } from 'react';

type AlumniGridProps = {
  children: ReactNode;
};

export default function AlumniGrid({ children }: AlumniGridProps) {
  const { width } = useWindowDimensions();
  const isLarge = width > 800;

  return (
    <View style={[styles.grid, isLarge && styles.gridWide]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    width: '100%',
    gap: 32,
  },
  gridWide: {
    maxWidth: 900,
    alignSelf: 'center',
  },
});