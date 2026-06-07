import type { Meta, StoryObj } from "@storybook/react";
import FacultyProfileCard from "../components/FacultyProfileCard";

const meta: Meta<typeof FacultyProfileCard> = {
  title: "Components/FacultyProfileCard",
  component: FacultyProfileCard,
};

export default meta;

type Story = StoryObj<typeof FacultyProfileCard>;

export const Default: Story = {
  args: {
    name: "BC KO",
    role: "Department Head",
    email: "email@seattlecolleges.org",
    phone: "206-555-5555",
    education: [
      { school: "North Seattle College", years: "2023 - 2025" },
      { school: "Central Seattle College", years: "2023 - 2025" },
    ],
    bio: [
      "Bio stuff here and how handsome BC is.",
      "Something about the mission of the program and what to expect if you join our program and whatever.",
      "Something about the mission of the program and what to expect if you join our program and whatever.",
      "Something about the mission of the program and what to expect if you join our program and whatever.",
    ],
  },
};

export const ShortBio: Story = {
  args: {
    ...Default.args,
    bio: ["Short faculty bio example."],
  },
};

export const LongBio: Story = {
  args: {
    ...Default.args,
    bio: [
      "This is a longer faculty bio example.",
      "It helps show how the component handles more text.",
      "The card should keep the same layout without breaking.",
      "This story is useful for testing flexible content.",
      "Additional text can continue here to test spacing.",
    ],
  },
};

export const OneEducationItem: Story = {
  args: {
    ...Default.args,
    education: [{ school: "Seattle Central College", years: "2021 - 2024" }],
  },
};
