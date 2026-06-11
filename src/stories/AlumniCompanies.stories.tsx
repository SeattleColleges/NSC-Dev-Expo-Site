import type { Meta, StoryObj } from "@storybook/react";
import AlumniCompanies from "../components/AlumniCompanies";

const meta = {
  title: "Components/AlumniCompanies",
  component: AlumniCompanies,
} satisfies Meta<typeof AlumniCompanies>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Where our Alumni are now",
    pageName: "home",
    companies: [
      { name: "Company Name" },
      { name: "Company Name" },
      { name: "Company Name" },

      { name: "Company Name" },
      { name: "Company Name" },

      { name: "Company Name" },
      { name: "Company Name" },
      { name: "Company Name" },
    ],
  },
};

export const AlternatePage: Story = {
  args: {
    title: "Our Alumni Work At",
    pageName: "about",
    companies: [
      { name: "Company Name" },
      { name: "Company Name" },
      { name: "Company Name" },
      { name: "Company Name" },
    ],
  },
};