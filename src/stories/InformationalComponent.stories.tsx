import type { Meta, StoryObj } from '@storybook/react-native-web-vite';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import InformationalComponent from '../components/InformationalComponent';

const meta = {
  title: 'Components/InformationalComponent',
  component: InformationalComponent,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          backgroundColor: '#E5E5E5',
        }}
      >
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    title: 'The Design Process',
    iconName: 'design-services',
    textSections: [
      'Find out how the App Development program do for you.',
      'Grow your business or non-profit for free.',
    ],
    onPress: fn(),
  },
} satisfies Meta<typeof InformationalComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
