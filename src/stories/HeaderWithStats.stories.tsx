import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { View } from 'react-native';
import HeaderWithStats from '../components/HeaderWithStats';

const meta = {
  title: 'Contact/HeaderWithStats',
  component: HeaderWithStats,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderWithStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: [
      { value: '3', description: 'Departments to aid your business' },
      { value: '6', description: 'commercial projects finished' },
      { value: '100%', description: 'Client Satisfaction' },
    ],
    heading: 'Need help with your business?',
    subheading: 'We will build your IT needs',
  },
};