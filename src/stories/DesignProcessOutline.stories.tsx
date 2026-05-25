import type { Meta, StoryObj } from "@storybook/react";
import DesignProcessOutline from "../components/DesignProcessOutline";

const meta = {
  title: "Components/DesignProcessOutline",
  component: DesignProcessOutline,
  args: {
    pageName: "about",
  },
} satisfies Meta<typeof DesignProcessOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomSteps: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: "Research",
        description: "Understand the problem and the users before anything else.",
      },
      {
        number: 2,
        title: "Prototype",
        description: "Build a quick prototype to validate assumptions early.",
      },
      {
        number: 3,
        title: "Ship",
        description: "Deliver working software and iterate based on feedback.",
      },
    ],
  },
};
