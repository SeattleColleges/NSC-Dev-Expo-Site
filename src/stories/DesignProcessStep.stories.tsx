import type { Meta, StoryObj } from "@storybook/react";
import DesignProcessStep from "../components/DesignProcessStep";

const meta: Meta<typeof DesignProcessStep> = {
  title: "Components/DesignProcessStep",
  component: DesignProcessStep,
  args: {
    stepNumber: 1,
    title: "Conducting Research",
    description:
      "Let us jump start your project. We begin by understanding the problem space and gathering insights.",
    deliverables: [
      {
        label: "Requirement Document",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
      {
        label: "User Personas",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
      {
        label: "Project Scope Documents",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ConductingResearch: Story = {};

export const InformationArchitecture: Story = {
  args: {
    stepNumber: 2,
    title: "Information Architecture",
    description:
      "We will map out your site using site maps and user flows to define structure.",
    deliverables: [
      {
        label: "Site Map",
        description:
          "After research, we create an information architecture map that will map out your product or service.",
      },
      {
        label: "User Flow Diagrams",
        description:
          "Going even further we will create and document user flow charts which will act as the foundation of your product or service functioning.",
      },
    ],
  },
};

export const ConceptualDesign: Story = {
  args: {
    stepNumber: 3,
    title: "Conceptual Design",
    description:
      "Simple wireframes and low detail layouts to explore layout and content hierarchy.",
    deliverables: [
      {
        label: "Simple Wireframes",
        description:
          "The visual development process starts with very basic wire frames with feedback and iteration loops.",
      },
      {
        label: "Low-Detail Wireframes",
        description:
          "When wire framing is decided on we will transition into low-detail wire frames.",
      },
    ],
  },
};

export const VisualDesignPrototypes: Story = {
  args: {
    stepNumber: 4,
    title: "Visual Design & Prototypes",
    description:
      "High detail wireframes and style exploration to bring the design to life.",
    deliverables: [
      {
        label: "High-Detail Wireframes",
        description:
          "This stage begins the high detail wire frames where the visuals we brought to a final polish.",
      },
      {
        label: "Style Guide",
        description:
          "We will decided elements like typography, colors, branding, and marketing materials.",
      },
      {
        label: "Clickable Prototype",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
    ],
  },
};

export const UsabilityTesting: Story = {
  args: {
    stepNumber: 5,
    title: "Usability Testing",
    description:
      "Testing and debugging to validate the design with real users.",
    deliverables: [
      {
        label: "Usability Test Reports",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
      {
        label: "Design Iteration Log",
        description:
          "From test reports to design changes we log it all for the development history for any future developers to work with.",
      },
    ],
  },
};

export const HandoffImplementation: Story = {
  args: {
    stepNumber: 6,
    title: "Hand-off & Implementation",
    description:
      "Final step — documentation and hand-off deliverables to prepare for development.",
    deliverables: [
      {
        label: "Production Ready Assets",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
      {
        label: "Design System Documentation",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
      {
        label: "Developer Hand-off Files",
        description:
          "If you want to create or redesign your product or service we will conduct our own research.",
      },
    ],
  },
};
