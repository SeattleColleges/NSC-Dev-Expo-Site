import type { Meta, StoryObj } from "@storybook/react";
import StudentCard from "../components/StudentCard";

const meta: Meta<typeof StudentCard> = {
  title: "Components/StudentCard",
  component: StudentCard,
};

export default meta;

type Story = StoryObj<typeof StudentCard>;

const student = {
  name: "Sammy Wanner",
  role: "Design Lead",
  description:
    "I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs.",
  githubUrl: "#",
  linkedinUrl: "#",
  studentPageUrl: "#",
};

export const Default: Story = {
  args: {
    ...student,
    variant: "default",
  },
};

export const WithButtonPropsWired: Story = {
  args: {
    ...student,
    variant: "default",
    githubUrl: undefined,
    linkedinUrl: undefined,
  },
};

export const CurrentStudents: Story = {
  args: {
    ...student,
    variant: "currentStudents",
  },
};

export const CurrentStudentManagementTeam: Story = {
  args: {
    ...student,
    variant: "managementTeam",
  },
};