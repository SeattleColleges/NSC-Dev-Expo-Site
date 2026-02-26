import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import it here!

interface FacultyMember {
    name: string;
    role: string;
    department: string;
    phone: string;
    email: string;
}

interface FacultySectionProps {
    title: string;
    members: FacultyMember[];
}

const FacultySection: React.FC<FacultySectionProps> = ({ title, members }) => {
    return (
        <View style={styles.sectionContainer}>
            <LinearGradient
                colors={['#000', '#ccc']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.gradientHeader}
            >
                <View style={{ width: '100%', maxWidth: 800, alignSelf: 'center', paddingHorizontal: 25 }}>
                    <Text style={styles.headerText}>The people in charge</Text>
                </View>
            </LinearGradient>

            <View style={styles.contentWrapper}>
                <Text style={styles.subTitle}>{title}</Text>

                {members.map((person, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.imagePlaceholder}>
                            <Text style={styles.imageText}>Student Image*</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{person.name}</Text>
                            <Text style={styles.role}>{person.role}</Text>
                            <Text style={styles.dept}>{person.department}</Text>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactText}>{person.phone}</Text>
                                <Text style={styles.contactText}>{person.email}</Text>
                            </View>
                            <TouchableOpacity style={styles.profileLink}>
                                <Text style={styles.linkText}>Faculty Profile {'>'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
     contentWrapper: {
        width: '100%',
        maxWidth: 800,
    },
    gradientHeader: {
        width: '100%',
        paddingVertical: 18,
        paddingHorizontal: 25,
        backgroundColor: 'transparent',
    },
    headerText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        textTransform: 'none',
    },
    subTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        marginTop: 25,
        marginBottom: 20,
        color: '#000',
    },
    card: {
        flexDirection: 'row',
        marginBottom: 40,
        paddingHorizontal: 25,
        alignItems: 'flex-start',
    },
    imagePlaceholder: {
        width: 120,
        height: 120,
        backgroundColor: '#d1d1d1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        minHeight: 120,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 2,
    },
    role: {
        fontSize: 15,
        fontWeight: '600',
        color: '#444',
    },
    dept: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
        lineHeight: 18,
    },
    contactInfo: {
        marginTop: 12,
    },
    contactText: {
        fontSize: 13,
        color: '#333',
        marginBottom: 3,
    },
    profileLink: {
        alignSelf: 'flex-end',
    },
    linkText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        textDecorationLine: 'underline',
    },
    imageText: {
        color: '#666',
        fontSize: 10,
        textAlign: 'center',
        paddingHorizontal: 5,  },
});

export default FacultySection;