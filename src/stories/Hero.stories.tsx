import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import Hero from "../components/Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  args: {
    title: "North Seattle Application Development",
    subtitle: "Developing IT students of the future",
    buttonLabel: "Join Us",
    pageName: "home",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StudentStory: Story = {
  args: {
    title: "The Student Story",
    subtitle: "Building your career and community",
    pageName: "student-story",
    infoHeading: "This is our proving grounds",
    infoDescription:
      "We can help you and you can help us. We have budding IT students eager to learn and build real world development skills.",
  },
};

export const AboutMobileV2: Story = {
  args: {
    title: "North Seattle College Application Development",
    pageName: "about",
    contentBlocks: [
      {
        type: "text",
        heading: "Welcome,",
        body: "in this program we are dedicated to cultivating the next generation of skilled app developers.",
        bodyWeight: "600",
        maxWidth: 600,
        offsetLeft: 42,
      },
      {
        type: "text",
        body: "We empower students to create innovative and impactful solutions in the ever-evolving world of technology. Our program equips them with the knowledge and hands-on experience needed to excel in the tech industry.",
        bodyWeight: "400",
        maxWidth: 600,
        offsetLeft: 42,
      },
      {
        type: "image",
        width: 532,
        height: 507,
        label: "Image Placeholder",
        offsetLeft: 84,
      },
      {
        type: "text",
        body: "Students will learn the skills they need through real projects from actual local businesses and non-profit organizations.",
        bodyWeight: "600",
        maxWidth: 600,
        offsetLeft: 50,
      },
      {
        type: "image",
        width: 524,
        height: 492,
        label: "Image Placeholder",
        offsetLeft: 88,
      },
      {
        type: "text",
        body: "Through a blend of rigorous coursework, practical project development, internships and mentorships from industry experts, and engagement with real-time projects from clients, we foster a dynamic learning environment that nurtures creativity, critical thinking, and technical proficiency. Our students engage in real-world challenges, developing apps that address contemporary issues and drive technological progress. At NSC, we believe in the power of education and innovation to transform lives and communities. Join us to unlock your potential, gain invaluable experience, and make a meaningful impact in the digital world. Together, we shape the future of technology.",
        bodyWeight: "400",
        maxWidth: 600,
        offsetLeft: 50,
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
