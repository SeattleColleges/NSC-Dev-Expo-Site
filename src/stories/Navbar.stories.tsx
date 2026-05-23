import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};