
import React from "react";
import HeroCTAButton from "./HeroCTAButton";

export default {
  title: "Components/HeroCTAButton",
  component: HeroCTAButton,
};

export const Default = () => (
  <HeroCTAButton label="Join Us" onPress={() => console.log("pressed")} />
);

export const Secondary = () => (
  <HeroCTAButton label="Learn More" onPress={() => console.log("pressed")} />
);

export const Disabled = () => (
  <HeroCTAButton label="Disabled" disabled onPress={() => {}} />
);