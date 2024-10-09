
import { Meta, StoryObj } from '@storybook/react';
import Schedules from "./schedules";

const meta = {
   component: Schedules,
   title: "Pages/Schedules"
} satisfies Meta<typeof Schedules>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
