import type { Meta, StoryObj } from "@storybook/react";
import InformationalSection from "./InformationalSection";

const meta: Meta<typeof InformationalSection> = {
  title: "Sections/InformationalSection",
  component: InformationalSection,
};

export default meta;

type Story = StoryObj<typeof InformationalSection>;

export const Default: Story = {};