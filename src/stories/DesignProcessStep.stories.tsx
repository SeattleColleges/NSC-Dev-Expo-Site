import React from "react";
import DesignProcessStep from "../components/DesignProcessStep";

export default {
  title: "Components/DesignProcessStep",
  component: DesignProcessStep,
};

export const ConductingResearch = () => (
  <DesignProcessStep
    stepNumber={1}
    title="Conducting Research"
    description="Let us jump start your project. We begin by understanding the problem space and gathering insights."
    deliverables={["Conducting Research Deliverables"]}
    accentColor="#4A90D9"
  />
);

export const InformationArchitecture = () => (
  <DesignProcessStep
    stepNumber={2}
    title="Information Architecture"
    description="We will map out your site using site maps and user flows to define structure."
    deliverables={["Information Architecture Deliverables"]}
    accentColor="#7B68EE"
  />
);

export const ConceptualDesign = () => (
  <DesignProcessStep
    stepNumber={3}
    title="Conceptual Design"
    description="Simple wireframes and low detail layouts to explore layout and content hierarchy."
    deliverables={["Conceptual Design Deliverables"]}
    accentColor="#50C878"
  />
);

export const VisualDesignPrototypes = () => (
  <DesignProcessStep
    stepNumber={4}
    title="Visual Design & Prototypes"
    description="High detail wireframes and style exploration to bring the design to life."
    deliverables={["Visual Design & Prototype Deliverables"]}
    accentColor="#FF6B6B"
  />
);

export const UsabilityTesting = () => (
  <DesignProcessStep
    stepNumber={5}
    title="Usability Testing"
    description="Testing and debugging to validate the design with real users."
    deliverables={["Usability Deliverables"]}
    accentColor="#FFA500"
  />
);

export const HandoffImplementation = () => (
  <DesignProcessStep
    stepNumber={6}
    title="Hand-off & Implementation"
    description="Final step — documentation and hand-off deliverables to prepare for development."
    deliverables={["Hand-off Deliverables"]}
    accentColor="#708090"
  />
);
