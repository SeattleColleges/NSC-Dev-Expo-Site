import type { Meta, StoryObj } from "@storybook/react";
import CurrentProjectStats from "../components/CurrentProjectStats/CurrentProjectStats";
import type { ProjectData } from "../components/CurrentProjectStats/CurrentProjectStats";

const meta: Meta<typeof CurrentProjectStats> = {
  title: "Components/CurrentProjectStats",
  component: CurrentProjectStats,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CurrentProjectStats>;

export const Default: Story = {};

const singleProject: ProjectData[] = [
  {
    id: "next-wave-dev",
    label: "Next Wave Dev",
    stats: [
      { label: "Students Involved", value: "12" },
      { label: "Timeline", value: "10 wks" },
      { label: "Open Roles", value: "3" },
      { label: "Phase", value: "Build" },
    ],
    techStack: ["React Native", "Expo", "TypeScript"],
    phase: "Build",
  },
];

export const SingleProject: Story = {
  args: {
    projects: singleProject,
    sectionTitle: "Active Project",
  },
};

const manyProjects: ProjectData[] = [
  {
    id: "next-wave-dev",
    label: "Next Wave Dev",
    stats: [
      { label: "Students Involved", value: "12" },
      { label: "Timeline", value: "10 wks" },
      { label: "Open Roles", value: "3" },
      { label: "Phase", value: "Build" },
    ],
    techStack: ["React Native", "Expo", "TypeScript"],
    phase: "Build",
  },
  {
    id: "belindas-closet",
    label: "Belinda's Closet",
    stats: [
      { label: "Students Involved", value: "8" },
      { label: "Timeline", value: "12 wks" },
      { label: "Open Roles", value: "2" },
      { label: "Phase", value: "Design" },
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL"],
    phase: "Design",
  },
  {
    id: "nsc-events",
    label: "NSC Events",
    stats: [
      { label: "Students Involved", value: "10" },
      { label: "Timeline", value: "8 wks" },
      { label: "Open Roles", value: "1" },
      { label: "Phase", value: "Testing" },
    ],
    techStack: ["React Native", "Node.js", "MongoDB"],
    phase: "Testing",
  },
  {
    id: "licton-springs",
    label: "Licton Springs Review",
    stats: [
      { label: "Students Involved", value: "6" },
      { label: "Timeline", value: "14 wks" },
      { label: "Open Roles", value: "4" },
      { label: "Phase", value: "Planning" },
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL"],
    phase: "Planning",
  },
];

export const MultipleProjects: Story = {
  args: {
    projects: manyProjects,
    sectionTitle: "Current Projects",
  },
};
