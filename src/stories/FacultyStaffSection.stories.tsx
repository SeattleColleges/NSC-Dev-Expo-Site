import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import FacultyStaffSection from "../components/FacultyStaffSection";

const meta = {
  title: "Components/FacultyStaffSection",
  component: FacultyStaffSection,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, width: "100%", alignItems: "center", backgroundColor: "#FFFFFF", paddingVertical: 24 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    members: [
      {
        id: "bc-ko-1",
        name: "BC KO",
        title: "Department Head",
        description: "Department head of the Application development department",
        phone: "206-555-5555",
        email: "Emailemail@seattlecolleges.org",
      },
      {
        id: "bc-ko-2",
        name: "BC KO",
        title: "Department Head",
        description: "Department head of the Application development department",
        phone: "206-555-5555",
        email: "Emailemail@seattlecolleges.org",
      },
      {
        id: "bc-ko-3",
        name: "BC KO",
        title: "Department Head",
        description: "Department head of the Application development department",
        phone: "206-555-5555",
        email: "Emailemail@seattlecolleges.org",
      },
    ],
  },
} satisfies Meta<typeof FacultyStaffSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
