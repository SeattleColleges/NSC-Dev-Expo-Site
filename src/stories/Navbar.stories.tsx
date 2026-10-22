import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { expect, userEvent, within } from 'storybook/test';

import Navbar from '../components/Navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuAccessibility: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: 'Navigation menu' });

    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText('About', { exact: true })).not.toBeInTheDocument();

    await userEvent.tab();
    await expect(menuButton).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('About', { exact: true })).toBeVisible();

    await userEvent.keyboard(' ');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText('About', { exact: true })).not.toBeInTheDocument();

    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('About', { exact: true })).toBeVisible();

    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText('About', { exact: true })).not.toBeInTheDocument();
  },
};
