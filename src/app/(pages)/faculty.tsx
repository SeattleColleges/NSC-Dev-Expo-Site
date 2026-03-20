import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import FacultyCard from '../../components/FacultyCard';

export default function FacultyPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.banner}>The people in charge</Text>

        <Text style={styles.heading}>Faculty</Text>
        <View style={styles.gridWrapper}>
          {facultyData.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              name={faculty.name}
              department={faculty.department}
              description={faculty.description}
              phone={faculty.phone}
              email={faculty.email}
              imageUrl={faculty.imageUrl}
              profileLink={faculty.profileLink}
              profileLinkLabel="Faculty Profile"
            />
          ))}
        </View>
        <Link href="https://seattlecolleges.edu">
          <Text style={styles.seeAll}>See All Faculty {'>'}</Text>
        </Link>

        <Text style={styles.heading}>Staff</Text>
        <View style={styles.gridWrapper}>
          {staffData.map((staff) => (
            <FacultyCard
              key={staff.id}
              name={staff.name}
              department={staff.department}
              description={staff.description}
              phone={staff.phone}
              email={staff.email}
              imageUrl={staff.imageUrl}
              profileLink={staff.profileLink}
              profileLinkLabel="Staff Profile"
            />
          ))}
        </View>
        <Link href="https://seattlecolleges.edu">
          <Text style={styles.seeAll}>See All Staff {'>'}</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  banner: {
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: '#555',
    color: '#fff',
    padding: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    maxWidth: 600,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
});

const facultyData = [
  {
    id: '1',
    name: 'BC KO',
    department: 'Department Head',
    description: 'Department head of the Application development department',
    phone: '206-555-5555',
    email: 'email@seattlecolleges.org',
    imageUrl: 'https://placecats.com/200/200',
    profileLink: 'https://seattlecolleges.edu',
  },
  {
    id: '2',
    name: 'BC KO',
    department: 'Department Head',
    description: 'Department head of the Application development department',
    phone: '206-555-5555',
    email: 'email@seattlecolleges.org',
    imageUrl: 'https://placecats.com/200/200',
    profileLink: 'https://seattlecolleges.edu',
  },
  {
    id: '3',
    name: 'BC KO',
    department: 'Department Head',
    description: 'Department head of the Application development department',
    phone: '206-555-5555',
    email: 'email@seattlecolleges.org',
    imageUrl: 'https://placecats.com/200/200',
    profileLink: 'https://seattlecolleges.edu',
  },
  {
    id: '4',
    name: 'BC KO',
    department: 'Department Head',
    description: 'Department head of the Application development department',
    phone: '206-555-5555',
    email: 'email@seattlecolleges.org',
    imageUrl: 'https://placecats.com/200/200',
    profileLink: 'https://seattlecolleges.edu',
  },
];

const staffData = [
  {
    id: '1',
    name: 'BC KO',
    department: 'Staff Member',
    description: 'Staff member of the Application development department',
    phone: '206-555-5555',
    email: 'email@seattlecolleges.org',
    imageUrl: 'https://placecats.com/200/200',
    profileLink: 'https://seattlecolleges.edu',
  },
  {
    id: '2',
    name: 'BC KO',
    department: 'Staff Member',
    description: 'Staff member of the Application development department',
    phone: '206-555-5555',
    email: 'email@seattlecolleges.org',
    imageUrl: 'https://placecats.com/200/200',
    profileLink: 'https://seattlecolleges.edu',
  },
];