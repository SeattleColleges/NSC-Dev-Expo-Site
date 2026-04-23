import type { Meta, StoryObj } from "@storybook/react";
import Hero from "../components/Hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
};
