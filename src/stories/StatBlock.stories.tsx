import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import StatBlock from '../components/StatBlock';

const meta = {
    title: 'Components/StatBlock',
    component: StatBlock,
    parameters: {
        layout: 'fullscreen', 
    },
    argTypes: {
        value: { control: 'text' },
        description: { control: 'text' },
    },
} satisfies Meta<typeof StatBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

const gradStats = [
    {
        id: '1',
        value: '80%',
        description: 'of students\nfind gainful employment',
    },
    {
        id: '2',
        value: '40%',
        description: 'of students\ngo on to masters degrees',
    },
    {
        id: '3',
        value: '100+',
        description: 'students have graduated',
    }
];

export const Normal: Story = {
    args: {
        value: '', 
        description: '',
    },
    render: () => (
        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingVertical: 40, width: '100%', alignItems: 'center' }}>
            {gradStats.map((stat) => (
                <StatBlock 
                    key={stat.id} 
                    value={stat.value} 
                    description={stat.description} 
                    style={{ width: 320, height: 180 }} 
                />
            ))}
        </View>
    ),
};

export const ExpoDevSiteStats: Story = {
    args: {
        value: '150+',
        description: 'Students Impacted',
        isLightMode: true, // Simply pass true here!
    },
    render: (args) => (
        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingVertical: 40, width: '100%', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
                <StatBlock 
                    {...args} // Spreads all args, including our flag
                    style={{ width: 220, height: 140 }} 
                />
            </View>
        </View>
    ),
};