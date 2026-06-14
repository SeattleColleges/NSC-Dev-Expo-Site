import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

export interface StatBlockProps {
    value: string;
    description: string;
    style?: ViewStyle;
    isLightMode?: boolean; // Added optional flag
}

export default function StatBlock({ value, description, style, isLightMode = false }: StatBlockProps) {
    
    // 1. Dynamic Text Styling Helper
    function renderStatValue(value: string) {
        const lastChar = value[value.length - 1];
        
        // Define text color dynamically based on theme mode
        const textColorStyle = { color: isLightMode ? '#000000' : '#FFFFFF' };
        
        if (lastChar === '%' || lastChar === '+') {
            return (
                <Text style={[styles.statValue, textColorStyle]}>
                    {value.slice(0, -1)}
                    <Text style={[styles.specialCharacter, textColorStyle]}>{lastChar}</Text>
                </Text>
            );
        }
        
        return <Text style={[styles.statValue, textColorStyle]}>{value}</Text>;
    }

    // Define context-driven background styles
    const containerThemeStyle: ViewStyle = isLightMode 
        ? { backgroundColor: '#E5E7EB', shadowOpacity: 0, elevation: 0 } // Light gray & flat from Figma
        : { backgroundColor: '#4A4A4A' }; // Original dark gray

    const descriptionColorStyle = { color: isLightMode ? '#374151' : '#d0d0d0' };

    return (
        <View style={[styles.cardContainer, containerThemeStyle, style]}>
            {renderStatValue(value)}
            <Text style={[styles.descriptionText, descriptionColorStyle]}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingTop: 20,
        paddingHorizontal: 24,
        marginVertical: 20, 
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, 
    },
    statValue: {
        fontSize: 64,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Inter',
    },
    specialCharacter: {
        fontSize: 48,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: -1, 
        lineHeight: 22, 
        fontFamily: 'Inter',
    },
});