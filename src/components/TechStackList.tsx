import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface DevTool {
    name: string;
    description: string;
}

export interface TechStackListProps {
    title: string;
    tools: DevTool[];
}

export default function TechStackList({ title, tools }: TechStackListProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>{title}</Text>
            
            {tools.map((tool, index) => (
                <View key={index} style={styles.listItem}>
                    {/* Just plain text styled to look like an underlined link */}
                    <Text style={styles.linkText}>{tool.name}</Text>
                    <Text style={styles.descriptionText}> - {tool.description}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        alignSelf: 'stretch',
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 12,
        fontFamily: 'Inter',
    },
    listItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 6,
    },
    linkText: {
        fontSize: 16,
        color: '#000000',
        textDecorationLine: 'underline', // Visual underline match
        fontFamily: 'Inter',
    },
    descriptionText: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Inter',
    },
});