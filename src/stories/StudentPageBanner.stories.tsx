import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import StudentPageBanner from "../components/StudentPageBanner";

const meta = {
  title: "Components/StudentPageBanner",
  component: StudentPageBanner,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof StudentPageBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MobileDefault: Story = {
  args: {
    title: "See the talent of the future",
    logoText: "LOGO",
    menuAccessibilityLabel: "Open menu",
  },
};
