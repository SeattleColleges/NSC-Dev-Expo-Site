import type { Meta, StoryObj } from '@storybook/react';
import FacultyStaffPage from '../components/FacultyStaffPage';

const meta: Meta<typeof FacultyStaffPage> = {
  title: 'Pages/FacultyStaffPage',
  component: FacultyStaffPage,
};

export default meta;

type Story = StoryObj<typeof FacultyStaffPage>;

export const Default: Story = {};