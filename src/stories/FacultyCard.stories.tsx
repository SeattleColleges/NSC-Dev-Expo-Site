
 
import type { Meta, StoryObj } from "@storybook/react";
import { View, StyleSheet } from "react-native";
// Fixed import path: goes out of 'stories' and into 'components'
import FacultyCard from "../components/FacultyCard";

const facultyList = [
  {
    name: "Jeff",
    title: "Application Development Instructor",
    email: "jeff@example.com",
    phone: "206-555-5555",
    education: [
      "North Seattle College (2023–2026)",
      "Central Seattle College (2023–2025)",
    ],
    bio: "Jeff Department Head: AD BAS department with a mission to teach front and back end to web developers.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "BC KO",
    title: "Department Head",
    email: "bc@example.com",
    phone: "206-555-5555",
    education: [
      "North Seattle College (2023–2026)",
      "Central Seattle College (2023–2025)",
    ],
    bio: "BC KO Department Head: AD BAS department with a mission to teach front and back end to web developers.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Isaac",
    title: "Software Engineering Faculty",
    email: "isaac@example.com",
    phone: "206-555-5555",
    education: [
      "North Seattle College (2023–2026)",
      "Central Seattle College (2023–2025)",
    ],
    bio: "Isaac Department Head: AD BAS department with a mission to teach front and back end to web developers.",
    github: "https://github.com/maria",
    linkedin: "https://linkedin.com/in/maria",
    image: "https://via.placeholder.com/150",
  },
];

const meta: Meta<typeof FacultyCard> = {
  title: "Components/FacultyCard",
  component: FacultyCard,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FacultyCard>;

export const InstructorJeff: Story = {
  args: {
    faculty: facultyList[0],
  },
};

export const DepartmentHeadBC: Story = {
  args: {
    faculty: facultyList[1],
  },
};

export const FacultyIsaac: Story = {
  args: {
    faculty: facultyList[2],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#2F2F2F", // Darker background to preview your card cleanly
  },
});