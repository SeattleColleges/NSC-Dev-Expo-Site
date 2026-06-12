import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export type PortfolioProject = {
id: string;
title: string;
description: string;
};

type PortfolioCarouselProps = {
projects: PortfolioProject[];
};

export default function PortfolioCarousel({
projects,
}: PortfolioCarouselProps) {
const [currentIndex, setCurrentIndex] = useState(0);

const nextProject = () => {
setCurrentIndex((prev) => (prev + 1) % projects.length);
};

const previousProject = () => {
setCurrentIndex((prev) =>
prev === 0 ? projects.length - 1 : prev - 1
);
};

const currentProject = projects[currentIndex];

return (
  <View style={styles.container}>
 
    <View style={styles.navBar}>
      <Text style={styles.logo}>LOGO</Text>
      <Text style={styles.menuIcon}>☰</Text>
    </View>

   
    <View style={styles.titleBar}>
      <Text style={styles.title}>Our Portfolio History</Text>
    </View>

    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.bcLogo}>
          <Text style={styles.logoText}>B{"\n"}C</Text>
        </View>

        <Text style={styles.projectName}>
          {currentProject.title}
        </Text>
      </View>

      <View style={styles.imagePlaceholder} />

      <View style={styles.clientSection}>
        <Text style={styles.clientText}>
          Client: North Seattle College • Non-Profit
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.tagline}>
          Dressing our community
        </Text>

        <Text style={styles.description}>
       Providing North Seattle College students with free clothing.
         Making sure the wardrobe is not one their problems.
       </Text>

        <View style={styles.techStack}>
       <View style={styles.techItem}>
    <MaterialCommunityIcons
      name="nodejs"
      size={50}
      color="#666"
    />
    <Text style={styles.techText}>avaScript</Text>
  </View>

  <View style={styles.techItem}>
  <MaterialCommunityIcons
    name="vector-square"
  size={50}
  color="#666"
/>
    <Text style={styles.techText}>Figma</Text>
  </View>

  <View style={styles.techItem}>
    <MaterialCommunityIcons
      name="language-css3"
      size={50}
      color="#666"
    />
    <Text style={styles.techText}>CSS</Text>
  </View>
</View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>See more details »</Text>
        </Pressable>
      </View>
    </View>

    
    <View style={styles.navigation}>
      <Pressable onPress={previousProject}>
        <Text style={styles.navText}>«</Text>
      </Pressable>

      <Text style={styles.navText}>
        ● ○ ○ ○ ○
      </Text>

      <Pressable onPress={nextProject}>
        <Text style={styles.navText}>»</Text>
      </Pressable>
    </View>
  </View>
);

}