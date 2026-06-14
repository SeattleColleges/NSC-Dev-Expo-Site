import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import InformationSectionBlocks from "../components/InformationSectionBlocks";

const meta = {
  title: "Home/InformationSectionBlocks",
  component: InformationSectionBlocks,
  tags: ["autodocs"],
} satisfies Meta<typeof InformationSectionBlocks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Your Vision, Our Code",

    description:
      "Skip the off-the-shelf software that doesn't quite fit. Our Application Development students dive deep into your organization's unique requirements.",

    stats: [
      {
        value: "10+",
        description: "Departments within our school to build your business",
      },
      {
        value: "6",
        description: "Commercial projects under our belt",
      },
      {
        value: "6",
        description: "Commercial projects under our belt",
      },
    ],
  },
};
