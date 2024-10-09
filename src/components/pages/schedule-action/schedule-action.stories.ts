
import { Meta, StoryObj } from '@storybook/react';
import ScheduleAction from "./schedule-action";

const meta = {
   component: ScheduleAction,
   title: "Pages/ScheduleAction"
} satisfies Meta<typeof ScheduleAction>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
