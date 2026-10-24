import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";
import BecomeStudent from "../components/BecomeStudent";

const onEnroll = fn().mockName("onEnroll");

const meta = {
  title: "Components/BecomeStudent",
  component: BecomeStudent,
  args: {
    onEnroll,
  },
} satisfies Meta<typeof BecomeStudent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const enrollButton = canvas.getByRole("button", { name: "Enroll Now" });

    onEnroll.mockClear();

    await userEvent.tab();
    await expect(enrollButton).toHaveFocus();

    await userEvent.click(enrollButton);
    await expect(onEnroll).toHaveBeenCalledTimes(1);

    onEnroll.mockClear();
    await userEvent.keyboard("{Enter}");
    await expect(onEnroll).toHaveBeenCalledTimes(1);

    onEnroll.mockClear();
    await userEvent.keyboard(" ");
    await expect(onEnroll).toHaveBeenCalledTimes(1);

    enrollButton.blur();
  },
};

export const ShortDescription: Story = {
  args: {
    description: "Flexible, hands-on classes with practicum project opportunities.",
  },
};
