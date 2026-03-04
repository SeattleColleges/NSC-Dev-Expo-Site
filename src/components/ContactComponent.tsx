import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions, ScrollView } from 'react-native';

const ContactComponent = () => {
  
  // Helper functions for interactivity
  const openMap = () => Linking.openURL('https://www.google.com/maps/search/?api=1&query=North+Seattle+College');
  const sendEmail = () => Linking.openURL('mailto:northseattle.appdev@gmail.com');
  const makeCall = () => Linking.openURL('tel:2069343600');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholderText}>google map*</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={openMap}>
          <Text style={styles.boldText}>North Seattle College</Text>
          <Text style={styles.text}>9600 College Way N,</Text>
          <Text style={styles.text}>Seattle, WA 98103</Text>
        </TouchableOpacity>

        <View style={styles.spacing} />

        <Text style={styles.boldText}>Email</Text>
        <TouchableOpacity onPress={sendEmail}>
          <Text style={[styles.text, styles.link]}>northseattle.appdev@gmail.com</Text>
        </TouchableOpacity>

        <View style={styles.spacing} />

        <Text style={styles.boldText}>Phone</Text>
        <TouchableOpacity onPress={makeCall}>
          <Text style={styles.text}>206.934.3600</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 40,
    width: 498,
    maxWidth:500,
  },
  mapContainer: {
    width: '90%',
    maxHeight:376,
    aspectRatio: 1.3, // Keeps the map box responsive
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    fontSize: 18,
    color: '#000',
  },
  infoContainer: {
  paddingHorizontal: '5%', 
  marginTop: 30,
  width: '100%', 
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    marginBottom: 2,
  },
  text: {
    fontSize: 24,
    color: '#333',
    lineHeight: 22,
  },
  link: {
    textDecorationLine: 'underline',
  },
  spacing: {
    height: 20,
  },
});

export default ContactComponent;