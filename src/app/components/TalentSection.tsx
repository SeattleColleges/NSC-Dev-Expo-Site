import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

interface Student {
    name: string;
    role: string;
}

interface TalentCardProps {
    name: string;
    role: string;
}

const TalentCard: React.FC<TalentCardProps> = ({ name, role }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imagePlaceholder}>
                <Text style={styles.imageText}>Student Image*</Text>
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
        </View>
    );
};


const TalentSection: React.FC = () => {
    const students: Student[] = [
        { name: "Bob Smith", role: "Tech Lead" },
        { name: "Ed Boi", role: "Design Lead" },
        { name: "Leila Natter", role: "Back End Engineer" },
        { name: "Jimmy Marter", role: "Project Manager" }
    ];

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.header}>Meet the future talent</Text>

            <View style={styles.grid}>
                {students.map((student, index) => (
                    <TalentCard key={index} name={student.name} role={student.role} />
                ))}
            </View>

            <TouchableOpacity
                onPress={() => Alert.alert("Navigation", "Navigating to all talent...")}
                style={styles.linkContainer}
            >
                <Text style={styles.linkText}>See everyone {'>'}</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
        outerContainer: {
            width: '100%',
            backgroundColor: '#ebebeb',
            paddingVertical: 40,
            alignItems: 'center',
        },
        contentWrapper: {
            width: '100%',
            maxWidth: 600,
            paddingHorizontal: 20,
        },
        header: {
            fontSize: 26,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 40,
            color: '#333',
        },
        grid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        card: {
            width: '46%',
            alignItems: 'center',
            marginBottom: 40,
        },
        imagePlaceholder: {
            width: '100%',
            aspectRatio: 1,
            backgroundColor: '#d9d9d9',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            marginBottom: 15,
        },
        imageText: {
            color: '#777',
            fontSize: 10,
        },
        name: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#000',
        },
        role: {
            fontSize: 14,
            color: '#555',
            textAlign: 'center',
            marginTop: 2,
        },
        linkContainer: {
            marginTop: 10,
            alignItems: 'center',
        },
        linkText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            textDecorationLine: 'underline',
        }
    });

export default TalentSection;