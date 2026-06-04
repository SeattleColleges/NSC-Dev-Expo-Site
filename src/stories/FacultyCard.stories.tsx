
import type { Meta, StoryObj } from "@storybook/react";
import { FacultyCard } from '../components/FacultyCard';

const meta: Meta<typeof FacultyCard> = {
  title: 'Components/FacultyCard',
  component: FacultyCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FacultyCard>;

export const InstructorJeff: Story = {
  args: {
    name: 'BC KO',
    title: 'Application Developemt\nDepartment Head', // Keeping typo exact to layout mockup
    bio: [
      'I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs.',
      'I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs. More words.',
      'I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs.',
      'I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs. More words.',
    ],
    skills: ['Front-End development', 'Figma', 'Photoshop', 'Git Hub'],
    contactInfo: {
      email: 'Emailemail@seattlecolleges.org',
      phone: '206-555-5555',
      office: {
        room: 'Room 69',
        hours: 'Monday - Friday, 12pm - 5pm',
      },
    },
    education: [
      { institution: 'North Seattle College', years: '2023 - 2025' },
      { institution: 'Central Seattle College', years: '2023 - 2025' },
    ],
    languages: ['English', 'Chinese'],
    hobbies: ['Warhammer', 'Dungeons and Dragons'],
  },
};