import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// --- Types ---
export type DeliverableItem = {
  label: string;
};

export type ProcessSectionProps = {
  stepNumber: string;
  title: string;
  header: string;
  bodyText: string;
  secondHeader?: string;
  secondBodyText?: string;
  deliverableTitle?: string;
  deliverables?: DeliverableItem[];
};

// --- Sub-Components ---

// 1. Reusable Image Stack
const ImageStack = ({ alignment }: { alignment: 'left' | 'right' }) => {
  const isLeft = alignment === 'left';

  return (
    <View style={styles.imageStack}>
      {/* Back Box */}
      <LinearGradient
        colors={['#777777', '#eeeeee']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[
          styles.imagePlaceholderBack,
          isLeft ? styles.backBoxLeft : styles.backBoxRight 
        ]}
      >
        <Text style={styles.placeholderText}>Random{'\n'}research{'\n'}material*</Text>
      </LinearGradient>

      {/* The Connecting Line */}
      <View style={[
        styles.connectingLine,
        isLeft ? styles.lineGoesRight : styles.lineGoesLeft
      ]} />

      {/* Front Box */}
      <LinearGradient
        colors={['#444444', '#888888']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[
          styles.imagePlaceholderFront,
          isLeft ? styles.frontBoxLeft : styles.frontBoxRight 
        ]}
      >
        <Text style={styles.placeholderText}>Random{'\n'}research{'\n'}material*</Text>
      </LinearGradient>
    </View>
  );
};

// 2. Reusable Row Component
const ProcessRow = ({
  header,
  bodyText,
  imageAlignment
}: {
  header: string;
  bodyText: string;
  imageAlignment: 'left' | 'right';
}) => {
  const isImageLeft = imageAlignment === 'left';

  return (
    <View style={styles.row}>
      {isImageLeft && <ImageStack alignment="left" />}

      <View style={[styles.textColumn, isImageLeft ? styles.textPadLeft : styles.textPadRight]}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.bodyText}>{bodyText}</Text>
      </View>

      {!isImageLeft && <ImageStack alignment="right" />}
    </View>
  );
};

// --- Main Component ---
export default function ProcessSection({
  stepNumber,
  title,
  header,
  bodyText,
  secondHeader,
  secondBodyText,
  deliverableTitle,
  deliverables,
}: ProcessSectionProps) {
  return (
    <View style={styles.wrapper}>
      {/* Top Gradient Banner */}
      <LinearGradient
        colors={['#333333', '#888888']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.banner}
      >
        <Text style={styles.bannerText}>Our Design Process</Text>
      </LinearGradient>

      <View style={styles.container}>
        {/* Step Title */}
        <Text style={styles.stepTitle}>{stepNumber}.  {title}</Text>

        {/* Row 1: Text Left, Image Right */}
        <ProcessRow
          header={header}
          bodyText={bodyText}
          imageAlignment="right"
        />

        {/* Row 2: Image Left, Text Right */}
        {secondHeader && secondBodyText && (
          <ProcessRow
            header={secondHeader}
            bodyText={secondBodyText}
            imageAlignment="left"
          />
        )}

        {/* Deliverables Section */}
        {deliverables && deliverables.length > 0 && (
          <View style={styles.deliverablesContainer}>
            {deliverableTitle && (
              <View style={styles.deliverableTitleBox}>
                <Text style={styles.deliverableTitleText}>{deliverableTitle}</Text>
              </View>
            )}
            {deliverables.map((item, index) => (
              <View 
                key={index} 
                style={[
                  styles.deliverableItem,
                  { marginLeft: 40 + (index * 50) } 
                ]}
              >
                <Text style={styles.deliverableText}>{'\u2022  '}{item.label}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
  },
  banner: {
    paddingVertical: 24,
    alignItems: 'center',
    width: '100%',
  },
  bannerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    padding: 24,
    width: '100%',
    maxWidth: 1000, 
    alignSelf: 'center',
  },
  stepTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    marginBottom: 40,
  },
  textColumn: {
    flex: 1,
  },
  textPadRight: {
    paddingRight: 75, 
  },
  textPadLeft: {
    paddingLeft: 75, 
  },
  header: {
    fontSize: 15, 
    fontWeight: 'bold',
    marginBottom: 6, 
    color: '#000',
  },
  bodyText: {
    fontSize: 11, 
    color: '#333',
    lineHeight: 16, 
  },
  imageStack: {
    width: 140, 
    height: 140, 
    position: 'relative',
    marginTop: 0, 
  },
  imagePlaceholderBack: {
    position: 'absolute',
    width: 95, 
    height: 95, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  backBoxLeft: {
    top: 0,
    left: 0,
  },
  backBoxRight: {
    top: 0,
    right: 0,
  },
  imagePlaceholderFront: {
    position: 'absolute',
    width: 95, 
    height: 95, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    zIndex: 2,
  },
  frontBoxLeft: {
    bottom: 0,
    right: 0,
  },
  frontBoxRight: {
    bottom: 0,
    left: 0,
  },
  placeholderText: {
    color: '#fff',
    fontSize: 9, 
    textAlign: 'center',
  },
  connectingLine: {
    position: 'absolute',
    height: 1, 
    backgroundColor: '#000',
    top: 92, 
    zIndex: 1,
  },
  lineGoesRight: {
    right: -55, 
    width: 55,  
  },
  lineGoesLeft: {
    left: -55,  
    width: 55,  
  },
  
  // --- Deliverables Styles ---
  deliverablesContainer: {
    marginTop: 20,
    width: '100%',
  },
  deliverableTitleBox: {
    backgroundColor: '#333',
    paddingVertical: 8, 
    paddingHorizontal: 16,
    marginBottom: 0, 
    alignSelf: 'flex-start',
    zIndex: 1,
  },
  deliverableTitleText: {
    color: '#fff',
    fontSize: 12, 
  },
  deliverableItem: {
    backgroundColor: '#333',
    paddingVertical: 8, 
    paddingHorizontal: 16,
    marginTop: -2, 
    marginBottom: 0, 
    alignSelf: 'flex-start', 
  },
  deliverableText: {
    color: '#fff',
    fontSize: 12, 
  },
});