import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const isMobile = screenWidth < 768;

export default function ContactUsBanner() {
  return (
    <View style={styles.container}>

      {/* Top Banner */}
      <View style={styles.topBanner}>
        <Text style={styles.mainHeading}>Need help with your business?</Text>
        <Text style={styles.subHeading}>We will build your IT needs</Text>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statDescription}>Departments within our school to build your business</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>6</Text>
          <Text style={styles.statDescription}>Commercial projects under our belt</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statDescription}>All client projects have come under completion and maintenance</Text>
        </View>
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
    width: screenWidth,
  },
  topBanner: {
    backgroundColor: '#1a1a1a',
    paddingVertical: isMobile ? 24 : 40,
    paddingHorizontal: isMobile ? 20 : 48,
    alignItems: 'flex-start',
  },
  mainHeading: {
    color: '#ffffff',
    fontSize: isMobile ? 20 : 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 6,
  },
  subHeading: {
    color: '#aaaaaa',
    fontSize: isMobile ? 14 : 18,
    textAlign: 'left',
  },
  statsGrid: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    flexDirection: 'row',
    justifyContent: isMobile ? 'space-between' : 'center',
    gap: isMobile ? 0 : 16,
  },
  statBox: {
    width: isMobile ? '31%' : '15%',
    backgroundColor: '#e0e0e0',
    padding: isMobile ? 10 : 24,
    alignItems: 'center',
    borderRadius: 2,
    justifyContent: 'center',
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