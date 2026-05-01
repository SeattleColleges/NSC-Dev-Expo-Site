import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type InformationalComponentProps = {
  onPress?: () => void;
};

export default function InformationalComponent({
  onPress,
}: InformationalComponentProps) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.heading}>The Design Process</Text>

      <MaterialIcons
        name="design-services"
        size={54}
        color="#CDCDCD"
        style={styles.icon}
      />

      <Text style={styles.bodyText}>
        Find out how the App Development program do for you.
        {'\n'}
        {'\n'}
        Grow your business or non-profit for free.
      </Text>

      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonLabel}>See more details</Text>
        <MaterialIcons
          name="keyboard-double-arrow-right"
          size={22}
          color="#FDFDFD"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: 708,
    height: 473,
    backgroundColor: '#717171',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  heading: {
    width: 296,
    height: 38,
    color: '#FAFAFA',
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  icon: {
    marginVertical: 4,
  },
  bodyText: {
    width: 265,
    height: 162,
    color: '#FAFAFA',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    width: 245,
    height: 35,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 17,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonLabel: {
    color: '#FDFDFD',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
});
