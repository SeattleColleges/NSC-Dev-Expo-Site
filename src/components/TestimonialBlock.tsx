import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface TestimonialBlockProps {
    quote: string;
    authorName: string;
    authorTitle: string;
    screenshotLabel: string;
}

export default function TestimonialBlock({ 
    quote, 
    authorName, 
    authorTitle, 
    screenshotLabel 
}: TestimonialBlockProps) {
    return (
        <View style={styles.container}>
            {/* The Quote */}
            <Text style={styles.quoteText}>“{quote}”</Text>
            
            {/* Author Attribution */}
            <View style={styles.metaContainer}>
                <Text style={styles.nameText}>{authorName}</Text>
                <Text style={styles.titleText}>{authorTitle}</Text>
            </View>

            {/* Feature Screenshot Mockup Box */}
            <View style={styles.screenshotPlaceholder}>
                <Text style={styles.placeholderText}>{screenshotLabel}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E7EB', // Matching the light gray section background from Figma
        paddingVertical: 40,
        paddingHorizontal: 24,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    quoteText: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#1F2937',
        textAlign: 'center',
        lineHeight: 28,
        fontFamily: 'Inter',
        marginBottom: 32,
    },
    metaContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    nameText: {
        fontSize: 22,
        color: '#1F2937',
        textAlign: 'center',
        fontFamily: 'Inter',
    },
    titleText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#4B5563',
        textAlign: 'center',
        fontFamily: 'Inter',
        marginTop: 2,
    },
    screenshotPlaceholder: {
        backgroundColor: '#6B7280', // Darker gray box matching the mockup asset
        width: 240,
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    placeholderText: {
        fontSize: 12,
        color: '#E5E7EB',
        textAlign: 'center',
        fontFamily: 'Inter',
    },
});