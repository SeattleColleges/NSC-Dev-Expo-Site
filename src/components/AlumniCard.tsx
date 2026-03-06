import { View, Text, StyleSheet } from 'react-native';

type AlumniCardProps = {
  name: string;
  role: string;
  quote: string;
};

export default function AlumniCard({ name, role, quote }: AlumniCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>

        {/* LEFT COLUMN */}
        <View style={styles.leftCol}>
          <View style={styles.profilePlaceholder} />

          <View style={styles.iconCol}>
            <View style={styles.iconPlaceholder} />
            <View style={styles.iconPlaceholder} />
          </View>
        </View>

        {/* RIGHT COLUMN */}
        <View style={styles.rightCol}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
          <Text style={styles.quote}>{quote}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#666666',   
    padding: 28,
    
    width: '100%',
    marginBottom: 32,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  leftCol: {
    alignItems: 'center',
    marginRight: 32,
  },

  profilePlaceholder: {
    width: 130,
    height: 120,
    
    backgroundColor: '#D9D9D9',
  },

  iconCol: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  iconPlaceholder: {
    width: 60,
    height: 50,
    
    backgroundColor: '#D9D9D9',
    marginHorizontal: 6,
  },

  rightCol: {
    flex: 1,
  },

  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },

  role: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 12,
  },

  quote: {
    color: '#ddd',
    fontSize: 14,
    lineHeight: 20,
  },
});