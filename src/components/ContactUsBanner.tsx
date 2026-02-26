import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const isMobile = screenWidth < 768;

export default function ContactUsBanner() {
  return (
    <View style={styles.container}>

      {/* Top Banner with Gradient */}
      <LinearGradient
        colors={['#1A1A1A', '#808080']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.topBanner}
      >
        <Text style={styles.mainHeading}>Need help with your business?</Text>
        <Text style={styles.subHeading}>We will build your IT needs</Text>
      </LinearGradient>

      {/* Stats Grid - 6 boxes */}
      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statDescription}>Departments within our school to build your business</Text>
        </View>
        <View style={styles.emptyBox} />
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statDescription}>All client projects have come under completion and maintenance</Text>
        </View>
        <View style={styles.emptyBox} />
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>6</Text>
          <Text style={styles.statDescription}>Commercial projects under our belt</Text>
        </View>
        <View style={styles.emptyBox} />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.bottomHeading}>Are you a small business or Non-profit Org?</Text>
        <Text style={styles.bottomSubHeading}>Tell us what you need help with</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  topBanner: {
    paddingVertical: isMobile ? 24 : 40,
    paddingHorizontal: isMobile ? 20 : 48,
    alignItems: 'flex-start',
  },
  mainHeading: {
    color: '#E8E8E8',
    fontSize: isMobile ? 20 : 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 6,
  },
  subHeading: {
    color: '#DBDBDB',
    fontSize: isMobile ? 14 : 18,
    textAlign: 'left',
  },
  statsGrid: {
    backgroundColor: '#f0f0f0',
    padding: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  statBox: {
    width: '33.33%',
    backgroundColor: '#D9D9D9',
    margin: 0,
    padding: isMobile ? 10 : 24,
    alignItems: 'center',
    borderRadius: 0,
    minHeight: isMobile ? 120 : 150,
    justifyContent: 'center',
  },
  emptyBox: {
     width: isMobile ? '33.33%' : '20%',
    backgroundColor: '#f0f0f0',
    margin: 0,
    borderRadius: 0,
    minHeight: isMobile ? 120 : 150,
  },
  statNumber: {
    fontSize: isMobile ? 24 : 36,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  statDescription: {
    fontSize: isMobile ? 10 : 14,
    textAlign: 'center',
    color: '#555555',
    marginTop: 4,
  },
  bottomSection: {
    padding: isMobile ? 20 : 40,
    paddingHorizontal: isMobile ? 20 : 48,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  bottomHeading: {
    fontSize: isMobile ? 22 : 32,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  bottomSubHeading: {
    fontSize: isMobile ? 13 : 16,
    color: '#666666',
    textAlign: 'left',
  },
});