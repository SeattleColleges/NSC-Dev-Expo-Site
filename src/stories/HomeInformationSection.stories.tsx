import HomeInformationSection from '../components/HomeInformationSection';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
    title: 'components/HomeInformationSection',
    component: HomeInformationSection,
} satisfies Meta<typeof HomeInformationSection>;

export default meta;

type Story = StoryObj<typeof HomeInformationSection>;

export const Default: Story = {
    args: {
        title: "Do you need IT help?",
        subtitle: "We can help you and you can help us.",
        description: "We have budding IT students, eager to learn and build real world development skills. And you are an organization who needs IT development to improve and expand your org."
    }
};
