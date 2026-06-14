import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProjectDetailsHeader from "../ProjectDetailsHeader";
import { CurrentProjectsDropdown } from "../CurrentProjectsDropdown/CurrentProjectsDropdown";

export type ProjectStatItem = {
  label: string;
  value: string;
};

export type ProjectData = {
  id: string;
  label: string;
  logo?: ImageSourcePropType;
  stats: ProjectStatItem[];
  techStack: string[];
  phase: string;
};

type CurrentProjectStatsProps = {
  projects?: ProjectData[];
  sectionTitle?: string;
};

const DEFAULT_PROJECTS: ProjectData[] = [
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
];

function StatItem({ label, value }: ProjectStatItem) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <View style={styles.techBadge}>
      <Text style={styles.techBadgeText}>{name}</Text>
    </View>
  );
}

export default function CurrentProjectStats({
  projects = DEFAULT_PROJECTS,
  sectionTitle = "Current Projects",
}: CurrentProjectStatsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData>(projects[0]);

  const dropdownOptions = projects.map((p) => ({ id: p.id, label: p.label }));

  const handleSelect = (option: { id: string; label: string }) => {
    const found = projects.find((p) => p.id === option.id);
    if (found) setSelectedProject(found);
  };

  return (
    <View style={styles.container}>
      <CurrentProjectsDropdown
        label={sectionTitle}
        buttonText="Select a project"
        options={dropdownOptions}
        onSelect={handleSelect}
      />

      <ProjectDetailsHeader title={selectedProject.label} logo={selectedProject.logo} />

      <View style={styles.statsGrid}>
        {selectedProject.stats.map((stat) => (
          <StatItem key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </View>

      <LinearGradient
        colors={["#2f2f2f", "#4a4a4a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.techSection}
      >
        <Text style={styles.techTitle}>Tech Stack</Text>
        <View style={styles.techList}>
          {selectedProject.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#1a1a1a",
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  statItem: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 16,
  },
  statValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#D9D9D9",
    fontFamily: "Inter",
  },
  statLabel: {
    fontSize: 13,
    color: "#A0A0A0",
    textAlign: "center",
    marginTop: 4,
    fontFamily: "Inter",
  },
  techSection: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  techTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#D9D9D9",
    marginBottom: 12,
    fontFamily: "Inter",
  },
  techList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  techBadge: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  techBadgeText: {
    color: "#D9D9D9",
    fontSize: 13,
    fontFamily: "Inter",
  },
});
