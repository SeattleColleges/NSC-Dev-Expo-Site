import type { Meta, StoryObj } from "@storybook/react";
import StudentBusinessCTA from "../components/StudentBusinessCTA";

const meta: Meta<typeof StudentBusinessCTA> = {
  title: "Components/StudentBusinessCTA",
  component: StudentBusinessCTA,
};

export default meta;

type Story = StoryObj<typeof StudentBusinessCTA>;

export const Default: Story = {
  args: {
    stats: [
      {
        value: "80%",
        label: "of students find gainful employment",
      },
      {
        value: "100+",
        label: "students placed within industry",
      },
      {
        value: "3+",
        label: "real clients to work and gain experience with",
      },
    ],
    studentTitle: "Want to apply as a student?",
    studentButtonText: "Apply Now",
    businessTitle: "We can help build and grow your business",
    brands: [
      {
        label: "text of brand",
        name: "Pelletier Construction",
      },
      {
        label: "text of brand",
        name: "Girl Geek Con",
      },
      {
        label: "text of brand",
        name: "Belinda's Closet",
      },
      {
        label: "text of brand",
        name: "NSC Events",
      },
    ],
    portfolioButtonText: "View Our Portfolio",
    footerText:
      "Or schedule a free class from here in shop with the edge of how they feel",
  },
};