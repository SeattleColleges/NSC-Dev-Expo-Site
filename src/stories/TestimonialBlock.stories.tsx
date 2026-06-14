import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TestimonialBlock from 'src/components/TestimonialBlock';

const meta = {
    title: 'Components/TestimonialBlock',
    component: TestimonialBlock,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TestimonialBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BobSmithDefault: Story = {
    // Supplying required args up front to satisfy the TypeScript compiler definitions
    args: {
        quote: 'I am so happy in my new project. This program has changed my very soul and now I can see through time and reality itself.',
        authorName: 'Bob Smith',
        authorTitle: 'Company Owner',
        screenshotLabel: 'Screen shot of feature*',
    },
    render: (args) => (
        <ScrollView contentContainerStyle={styles.storyContainer}>
            <TestimonialBlock {...args} />
        </ScrollView>
    ),
};

const styles = StyleSheet.create({
    storyContainer: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
});