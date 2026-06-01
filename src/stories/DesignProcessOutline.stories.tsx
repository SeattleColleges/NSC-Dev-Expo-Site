import type { Meta, StoryObj } from "@storybook/react";
import DesignProcessOutline from "../components/DesignProcessOutline";

const meta = {
  title: "Components/DesignProcessOutline",
  component: DesignProcessOutline,
} satisfies Meta<typeof DesignProcessOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPageName: Story = {
  args: {
    pageName: "About",
  },
};

export const CustomSteps: Story = {
  args: {
    pageName: "Services",
    steps: [
      { number: 1, title: "Research" },
      { number: 2, title: "Prototype" },
      { number: 3, title: "Ship" },
    ],
  },
};
