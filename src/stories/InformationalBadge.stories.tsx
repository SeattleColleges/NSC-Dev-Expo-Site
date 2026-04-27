import type { Meta, StoryObj } from "@storybook/react";
import InformationalBadge from "../components/InformationalBadge";

const meta: Meta<typeof InformationalBadge> = {
  title: "Components/InformationalBadge",
  component: InformationalBadge,
};

export default meta;

type Story = StoryObj<typeof InformationalBadge>;

export const WorkWithUs: Story = {
  args: {
    title: "Work with Us",
    description:
      "Does your org need IT development needs? We can be the ones who help.",
    buttonText: "Hire Us",
  },
};

export const BecomeStudent: Story = {
  args: {
    title: "Become a Student",
    description:
      "Want to learn modern high demand skills? Come check out our program.",
    buttonText: "Join Us",
  },
};
