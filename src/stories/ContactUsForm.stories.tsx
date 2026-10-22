import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import ContactUsForm from "../components/ContactUsForm";

const meta = {
  title: "Components/ContactUsForm",
  component: ContactUsForm,
} satisfies Meta<typeof ContactUsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AccessibleKeyboardEntry: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const fields = [
      { name: "Name (required)", value: "Demo Student" },
      { name: "Email (required)", value: "student@example.com" },
      { name: "Business Name (optional)", value: "Example Business" },
      { name: "Your message (required)", value: "A sample project inquiry." },
    ];

    for (const field of fields) {
      const input = canvas.getByRole("textbox", { name: field.name });
      await userEvent.tab();
      await expect(input).toHaveFocus();
      await userEvent.keyboard(field.value);
      await expect(input).toHaveValue(field.value);
      await expect(input).toHaveAccessibleName(field.name);
    }

    const submitButton = canvas.getByRole("button", { name: "Submit" });
    await userEvent.tab();
    await expect(submitButton).toHaveFocus();
    await userEvent.tab({ shift: true });
    await expect(canvas.getByRole("textbox", { name: "Your message (required)" })).toHaveFocus();
  },
};
