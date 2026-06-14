import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import HowItWorksBanner from "../components/HowItWorksBanner";

const meta = {
  title: "SDLC/HowItWorksBanner",
  component: HowItWorksBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof HowItWorksBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
