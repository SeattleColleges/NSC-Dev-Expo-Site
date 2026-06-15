import type { Meta, StoryObj } from "@storybook/react";
import DesignProcessStep from "../components/DesignProcessStep";

const meta: Meta<typeof DesignProcessStep> = {
  title: "Components/DesignProcessStep",
  component: DesignProcessStep,
  args: {
    stepNumber: 1,
    title: "Conducting Research",
    sectionTitle: "Getting Started",
    sectionDescription:
      "Whatever project or business venture we will research the needs and wants for your project. We will ensure that will produce a service or products that will meet the needs of your venture.",
    bodyTitle: "Let us jump start your project",
    description:
      "If you want to create or redesign your product or service we will conduct our own research. You are able to guide us in the direction you want or we can do all the work for you design the vision for you.",
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
    sectionTitle: "Mapping the Structure",
    sectionDescription:
      "We organize and structure your content so users can find what they need intuitively and efficiently.",
    bodyTitle: "Building the blueprint",
    description:
      "We will map out your site using site maps and user flows to define structure and guide the user journey.",
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
    sectionTitle: "Wireframes & Layout",
    sectionDescription:
      "We begin sketching out the basic structure and layout of your product before any visual design decisions are made.",
    bodyTitle: "Sketching the experience",
    description:
      "Simple wireframes and low detail layouts to explore layout and content hierarchy before committing to a direction.",
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
    sectionTitle: "Bringing It to Life",
    sectionDescription:
      "We apply your brand identity to the wireframes and create high-fidelity designs and interactive prototypes.",
    bodyTitle: "Designing the final look",
    description:
      "High detail wireframes and style exploration to bring the design to life with real colors, typography, and interactions.",
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
    sectionTitle: "Validating the Design",
    sectionDescription:
      "We test the prototype with real users to identify pain points and areas of improvement before development begins.",
    bodyTitle: "Testing with real users",
    description:
      "Testing and debugging to validate the design with real users and ensure the product meets their needs.",
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
    sectionTitle: "Ready for Development",
    sectionDescription:
      "We package all design assets and documentation so your development team can build with confidence.",
    bodyTitle: "Delivering the final package",
    description:
      "Final step — documentation and hand-off deliverables to prepare for development and ensure a smooth transition.",
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