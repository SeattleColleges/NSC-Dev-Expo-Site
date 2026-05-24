import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StudentPage() {
  return (
    <View style={styles.container}>
      
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.title}>
          Want to apply as a student?
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  banner: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});