import { Meta,StoryObj } from '@storybook/react-native-web-vite'
import HamburgerButton from '../components/HamburgerButton'

import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof HamburgerButton>;

const meta: Meta<StoryProps> = {
    component: HamburgerButton,
};

export default meta

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        
    }
};