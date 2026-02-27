import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

type FacultyCardProps = {
  name: string;
  department: string;
  description: string;
  phone: string;
  email: string;
  imageUrl: string;
  profileLink: string;
};

export default function FacultyCard({
  name,
  department,
  description,
  phone,
  email,
  imageUrl,
  profileLink,
}: FacultyCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.department}>{department}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.contact}>{phone}</Text>
        <Text style={styles.contact}>{email}</Text>
        <Link href={profileLink}>
          <Text style={styles.link}>Faculty Profile {'>'}</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  department: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  description: {
    fontSize: 11,
    color: '#444',
    marginBottom: 4,
  },
  contact: {
    fontSize: 11,
    color: '#444',
  },
  link: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
});