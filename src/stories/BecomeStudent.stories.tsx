import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import BecomeStudent from "../components/BecomeStudent";

const meta = {
  title: "Components/BecomeStudent",
  component: BecomeStudent,
  args: {
    title: "Become a student",
    description:
      "Start your journey at North Seattle College—learn practical skills and build real projects with industry partners.",
    ctaLabel: "Learn how",
    onEnroll: fn(),
  },
} satisfies Meta<typeof BecomeStudent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortDescription: Story = {
  args: {
    description: "Flexible, hands-on classes with practicum project opportunities.",
  },
};
