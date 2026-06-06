import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 200,
          border: "8px solid black",
          backgroundColor: "#fff",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MobileClosed: Story = {
  name: "Mobile (Closed)",
  args: {
    defaultMenuOpen: false,
  },
};

export const MobileMenuOpen: Story = {
  name: "Mobile (Menu Open)",
  args: {
    defaultMenuOpen: true,
  },
};