import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface StatItem {
  value: string;
  description: string;
}

export interface HeaderWithStatsProps {
  stats: StatItem[];
  heading: string;
  subheading: string;
}

function renderStatValue(value: string) {
  const lastChar = value[value.length - 1];
  if (lastChar === '%' || lastChar === '+') {
    return (
      <Text style={styles.statValue}>
        {value.slice(0, -1)}
        <Text style={styles.specialChar}>{lastChar}</Text>
      </Text>
    );
  }
  return <Text style={styles.statValue}>{value}</Text>;
}

export default function HeaderWithStats({ stats, heading, subheading }: HeaderWithStatsProps) {
  const { width } = useWindowDimensions();
  const isNarrow = width < 600;

  return (
    <LinearGradient
      style={styles.container}
      colors={['#1A1A1A', '#808080']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subheading}>{subheading}</Text>
      <View style={[styles.card, isNarrow && styles.cardNarrow]}>
        {stats.map((stat) => (
          <View
            style={[styles.statBlock, isNarrow && styles.statBlockNarrow]}
            key={`${stat.value}-${stat.description}`}
          >
            {renderStatValue(stat.value)}
            <Text style={styles.statDescription}>{stat.description}</Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 15,
    fontFamily: 'Inter',
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  cardNarrow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  statBlock: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  statBlockNarrow: {
    flex: 0,
    width: '100%',
  },
  statValue: {
    fontSize: 40,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#fff',
  },
  specialChar: {
    fontSize: 28,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#fff',
  },
  statDescription: {
    fontSize: 13,
    fontFamily: 'Inter',
    color: '#ccc',
    textAlign: 'center',
    marginTop: 6,
  },
});