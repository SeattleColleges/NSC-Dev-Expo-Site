import type { Meta, StoryObj } from "@storybook/react";
import InformationalWithButton from "src/components/InformationalWithButton";

const meta = {
	title: "Components/Informational With Button",
	component: InformationalWithButton,
	args: {
		headerText: "Header",
		bodyText: "Body",
		buttonLabel: "Click Here",
		onClickEvent: () => {},
	},
} satisfies Meta<typeof InformationalWithButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Test: Story = {
    args: {
        headerText: "Header 2",
        bodyText: "Body 2",
        buttonLabel: "Click Here"
    }
};
