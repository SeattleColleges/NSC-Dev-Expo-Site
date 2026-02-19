import React from "react";
import { View } from "react-native";
import ProjectDetailsHeader from "../../components/ProjectDetailsHeader";

export default function ProjectDetailsPage() {
  return (
    <View>
      <ProjectDetailsHeader
        title="Belinda's Closet"
        logo={require("../../../assets/images/LOGO.png")}
      />
    </View>
  );
}
