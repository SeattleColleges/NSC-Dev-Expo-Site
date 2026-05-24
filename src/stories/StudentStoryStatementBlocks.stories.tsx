import type { Meta, StoryObj } from '@storybook/react-native-web-vite';

import { View } from 'react-native';

import StudentStoryStatementBlocks from '../components/StudentStoryStatementBlocks';

const meta = {
    title: 'Example/StudentStoryStatementBlocks',
    component: StudentStoryStatementBlocks,
    decorators: [
        (Story) => (
            <View style={{ flex: 1 }}>
                <Story />
            </View>
        ),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof StudentStoryStatementBlocks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        heading: 'This is our proving grounds',
        blocks: [
            {
                title: 'Learning',
                description:
                    'Find out how the App Development program fits your future as you profit.',
            },
            {
                title: 'Applying',
                description:
                    'Check out our previous projects and case studies.',
            },
            {
                title: 'Developing',
                description:
                    'See what we have accomplished throughout the program.',
            },
        ],
    },
};