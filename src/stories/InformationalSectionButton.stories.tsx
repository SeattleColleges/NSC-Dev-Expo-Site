import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import InformationalSectionButton from "../components/InformationalSectionButton";

const meta = {
  title: "Home/InformationalSectionButton",
  component: InformationalSectionButton,
  tags: ["autodocs"],
} satisfies Meta<typeof InformationalSectionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Ready to Build Your Future?",
    description:
      "Join the Application Development program and gain hands-on experience building real-world software solutions with industry-relevant tools and technologies.",
    buttonLabel: "Apply Now",
  },
};

export const LearnMore: Story = {
  args: {
    title: "Learn What You Want",
    description:
      "Explore multiple technologies, strengthen your skills, and discover the path that best matches your interests and career goals.",
    buttonLabel: "Learn More",
  },
};
