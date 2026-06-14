import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import SDLCPhaseSection from "../components/SDLCPhaseSection";

const meta = {
  title: "SDLC/PhaseSection",
  component: SDLCPhaseSection,
  tags: ["autodocs"],
} satisfies Meta<typeof SDLCPhaseSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DesignPhase: Story = {
  args: {
    phaseTitle: "Design Phase",
    phaseDescription:
      "At the beginning of development, students create designs and plan how the application will function.",

    storyTitle: "Wireframing",

    storyDescription:
      "Wireframes help visualize layouts, navigation, and user interactions before coding begins.",

    caption: "Example wireframe",
  },
};

export const CodingPhase: Story = {
  args: {
    phaseTitle: "Coding Phase",

    phaseDescription:
      "During development, students transform designs into working software.",

    storyTitle: "Coding",

    storyDescription:
      "Developers implement features and functionality using programming languages and frameworks.",

    caption: "Example coding workflow",
  },
};
