import { SafeAreaView, ScrollView } from 'react-native';
import FacultySection from '../../components/FacultySection';

export default function TestPage() {
    const facultyData = [
        {
            name: "BC KO",
            role: "Department Head",
            department: "Application Development",
            phone: "206-555-0101",
            email: "bcko@seattlecolleges.edu"
        }
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                 <FacultySection title="Faculty" members={facultyData} />
            </ScrollView>
        </SafeAreaView>
    );
}