import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.socialRow}>
        <Text style={styles.socialIcon}>f</Text>
        <Text style={styles.socialIcon}>𝕏</Text>
        <Text style={styles.socialIcon}>◎</Text>
        <Text style={styles.socialIcon}>▶</Text>
        <Text style={styles.socialIcon}>in</Text>
      </View>

      <Text style={styles.label}>Address:</Text>
      <Text style={styles.text}>North Seattle College</Text>
      <Text style={styles.text}>9600 College Way North</Text>
      <Text style={styles.text}>Seattle, WA 98103</Text>

      <Text style={styles.label}>Contact</Text>
      <Text style={styles.text}>206.934.3800</Text>

      <Text style={styles.copyright}>©2025 All rights reserved</Text>

      <View style={styles.linksRow}>
        <Link href="https://seattlecolleges.edu">
          <Text style={styles.link}>Terms</Text>
        </Link>
        <Link href="https://seattlecolleges.edu">
          <Text style={styles.link}>Privacy</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#222',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  socialIcon: {
    color: '#fff',
    fontSize: 18,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 13,
  },
  text: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
  },
  copyright: {
    color: '#aaa',
    fontSize: 11,
    marginTop: 16,
  },
  linksRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  link: {
    color: '#aaa',
    fontSize: 11,
  },
});