import type { Meta, StoryObj } from "@storybook/react";
import AlumniAccomplishmentsBanner from "../components/AlumniAccomplishmentsBanner";

const meta = {
  title: "Components/AlumniAccomplishmentsBanner",
  component: AlumniAccomplishmentsBanner,
  parameters: {
    // This tells Storybook to remove the default white border!
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AlumniAccomplishmentsBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alumniList: [
      {
        id: "1",
        name: "Ricky Bobby",
        jobTitle: "Microsoft Engineer",
        quote: "I am so happy in my new job. This program has changed my very soul and now I can see through time and reality itself. My brain has become so big from this app development program I needed a to buy a new head to fit it. BC is like a god in man's clothing.",
      },
      {
        id: "2",
        name: "Ricky Bobby",
        jobTitle: "Microsoft Engineer",
        quote: "I am so happy in my new job. This program has changed my very soul and now I can see through time and reality itself. My brain has become so big from this app development program I needed a to buy a new head to fit it. BC is like a god in man's clothing.",
      }
    ],
  },
};