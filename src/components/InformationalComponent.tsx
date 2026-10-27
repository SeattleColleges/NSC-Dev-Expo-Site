import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type InformationalComponentProps = {
  title: string;
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
  textSections: string[];
  onPress?: () => void;
  buttonLabel?: string;
};

export default function InformationalComponent({
  title,
  iconName,
  textSections,
  onPress,
  buttonLabel = 'See more details',
}: InformationalComponentProps) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.heading}>{title}</Text>

      <MaterialIcons
        name={iconName}
        size={54}
        color="#CDCDCD"
        style={styles.icon}
      />

      <Text style={styles.bodyText}>{textSections.join('\n\n')}</Text>

      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonLabel}>{buttonLabel}</Text>
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
    width: '100%',
    maxWidth: 708,
    minHeight: 473,
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
    width: '100%',
    maxWidth: 296,
    minHeight: 38,
    paddingVertical: 2,
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
    width: '100%',
    maxWidth: 265,
    minHeight: 162,
    color: '#FAFAFA',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    width: '100%',
    maxWidth: 245,
    minHeight: 35,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    paddingHorizontal: 12,
    paddingVertical: 4,
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
