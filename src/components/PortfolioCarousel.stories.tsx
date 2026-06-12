import type { Meta, StoryObj } from "@storybook/react";
import PortfolioCarousel from "./PortfolioCarousel";

const meta: Meta<typeof PortfolioCarousel> = {
  title: "Components/PortfolioCarousel",
  component: PortfolioCarousel,
};

export default meta;

type Story = StoryObj<typeof PortfolioCarousel>;

export const Default: Story = {
  args: {
    projects: [
      {
        id: "1",
        title: "Belinda's Closet",
        description:
          "Providing North Seattle College students with free clothing and resources.",
      },
      {
        id: "2",
        title: "NSC Events",
        description:
          "Helping students discover and participate in campus activities.",
      },
      {
        id: "3",
        title: "Next Wave Dev",
        description:
          "Supporting student developers through collaborative projects.",
      },
    ],
  },
};