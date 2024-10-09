
import { Meta, StoryObj } from '@storybook/react';
import ScheduleList from "./schedule-list";

const meta = {
   component: ScheduleList,
   title: "Molecules/ScheduleList"
} satisfies Meta<typeof ScheduleList>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
