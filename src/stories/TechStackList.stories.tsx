import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TechStackList from 'src/components/TechStackList';

const meta = {
    title: 'Components/TechStackList',
    component: TechStackList,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TechStackList>;

export default meta;
type Story = StoryObj<typeof meta>;

const frontEndTools = [
    { name: 'Next.js', description: 'web application' },
    { name: 'Android Studio', description: 'android application' },
];

const backEndTools = [
    { name: 'Next.js', description: 'server-side backend application' },
    { name: 'Android Studio', description: 'android application' },
    { name: 'Postman', description: 'testing API solutions' },
    { name: 'MongoDB', description: 'data collection server' },
    { name: 'GitHub', description: 'git hub' },
    { name: 'JWT', description: 'authentication of users' },
    { name: 'Google Cloud', description: 'storage and eventual deployment' },
];

export const FullStackUsage: Story = {
    args: {
        title: 'Front End',
        tools: frontEndTools,
    },
    render: () => (
        <ScrollView contentContainerStyle={styles.storyContainer}>
            <Text style={styles.mainTitle}>Software & Tools Used</Text>
            <View style={styles.divider} />
            
            <TechStackList title="Front End" tools={frontEndTools} />
            <TechStackList title="Back End" tools={backEndTools} />
        </ScrollView>
    ),
};

const styles = StyleSheet.create({
    storyContainer: {
        padding: 24,
        backgroundColor: '#ffffff',
    },
    mainTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        fontFamily: 'Inter',
    },
    divider: {
        height: 1,
        backgroundColor: '#000000',
        marginTop: 8,
        marginBottom: 20,
    },
});