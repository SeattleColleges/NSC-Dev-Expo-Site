import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { expect, fn, userEvent, within } from "storybook/test";

import FacultyStaffSection from "../components/FacultyStaffSection";

const firstProfilePress = fn().mockName("profile-bc-ko-1");
const secondProfilePress = fn().mockName("profile-bc-ko-2");
const thirdProfilePress = fn().mockName("profile-bc-ko-3");
const allFacultyPress = fn().mockName("all-faculty");

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
        onProfilePress: firstProfilePress,
      },
      {
        id: "bc-ko-2",
        name: "BC KO",
        title: "Department Head",
        description: "Department head of the Application development department",
        phone: "206-555-5555",
        email: "Emailemail@seattlecolleges.org",
        onProfilePress: secondProfilePress,
      },
      {
        id: "bc-ko-3",
        name: "BC KO",
        title: "Department Head",
        description: "Department head of the Application development department",
        phone: "206-555-5555",
        email: "Emailemail@seattlecolleges.org",
        onProfilePress: thirdProfilePress,
      },
    ],
    onAllFacultyPress: allFacultyPress,
  },
} satisfies Meta<typeof FacultyStaffSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const profileButtons = canvas.getAllByRole("button", { name: "Faculty Profile >>" });
    const allFacultyButton = canvas.getByRole("button", { name: "All Faculty & Staff >>" });

    firstProfilePress.mockClear();
    secondProfilePress.mockClear();
    thirdProfilePress.mockClear();
    allFacultyPress.mockClear();

    await userEvent.click(profileButtons[0]);
    await expect(firstProfilePress).toHaveBeenCalledTimes(1);
    await expect(secondProfilePress).not.toHaveBeenCalled();

    await userEvent.click(profileButtons[1]);
    await expect(secondProfilePress).toHaveBeenCalledTimes(1);
    await expect(thirdProfilePress).not.toHaveBeenCalled();

    await userEvent.click(profileButtons[2]);
    await expect(thirdProfilePress).toHaveBeenCalledTimes(1);
    await expect(allFacultyPress).not.toHaveBeenCalled();

    await userEvent.click(allFacultyButton);
    await expect(firstProfilePress).toHaveBeenCalledTimes(1);
    await expect(secondProfilePress).toHaveBeenCalledTimes(1);
    await expect(thirdProfilePress).toHaveBeenCalledTimes(1);
    await expect(allFacultyPress).toHaveBeenCalledTimes(1);
  },
};
