import type { Meta, StoryObj } from "@storybook/react";
import CurrentProjectsDropdown from "../components/CurrentProjectsDropdown/CurrentProjectsDropdown";

const meta: Meta<typeof CurrentProjectsDropdown> = {
  title: "Components/CurrentProjectStats",
  component: CurrentProjectsDropdown,
};

export default meta;

type Story = StoryObj<typeof CurrentProjectsDropdown>;

export const Default: Story = {};
