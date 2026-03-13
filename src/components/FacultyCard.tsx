import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface FacultyCardProps {
  name: string;
  department: string;
  description: string;
  phone?: string;
  email?: string;
  imageUrl?: string;
  profileLink: string;
  profileLinkLabel: string;
}

export default function FacultyCard({
  name,
  department,
  description,
  phone,
  email,
  imageUrl,
  profileLink,
  profileLinkLabel,
}: FacultyCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageUrl || 'https://placecats.com/200/200' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.department}>{department}</Text>
        <Text style={styles.description}>{description}</Text>
        {phone && <Text style={styles.contact}>{phone}</Text>}
        {email && <Text style={styles.contact}>{email}</Text>}
        <View style={styles.linkWrapper}>
          <Pressable onPress={() => {}}>
            <Text style={styles.link}>{profileLinkLabel} {'>'}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
card: {
  width: '48%',
  backgroundColor: '#f0f0f0',
  padding: 12,
  marginBottom: 16,
  alignItems: 'center',
  flexDirection: 'column',
},
image: {
  width: 80,
  height: 80,
  backgroundColor: '#ccc',
  marginBottom: 8,
  alignSelf: 'center',
},
  info: {
    width: '100%',
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
  linkWrapper: {
    alignItems: 'flex-end',
    marginTop: 4,
  },
  link: {
    fontSize: 12,
    color: '#000',
  },
});