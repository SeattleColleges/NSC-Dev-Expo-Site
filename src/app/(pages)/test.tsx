import React from 'react';
import { ScrollView } from 'react-native';
import TalentSection from '../components/TalentSection';

export default function TestPage() {
    const myTestData = [
        { name: "Bob Smith", role: "Tech Lead" },
        { name: "Ed Boi", role: "Design Lead" },
        { name: "Leila Natter", role: "Back End Engineer" },
        { name: "Jimmy Marter", role: "Project Manager" }
    ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TalentSection students={myTestData} title="Reviewer's Test View" />
        </ScrollView>
    );
}