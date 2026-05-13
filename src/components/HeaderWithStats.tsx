import { StyleSheet, View, Text } from 'react-native';

export interface StatItem {
  value: string;
  description: string;
}

export interface HeaderWithStatsProps {
  stats: StatItem[];
  page?: string;
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

export default function HeaderWithStats({ stats, page }: HeaderWithStatsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {stats.map((stat) => (
          <View style={styles.statBlock} key={`${stat.value}-${stat.description}`}>
            {renderStatValue(stat.value)}
            <Text style={styles.statDescription}>{stat.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: '#E8354A',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  statBlock: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  statValue: {
    fontSize: 40,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  specialChar: {
    fontSize: 28,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  statDescription: {
    fontSize: 13,
    fontFamily: 'Inter',
    color: '#444',
    textAlign: 'center',
    marginTop: 6,
  },
});
