
import { Meta, StoryObj } from '@storybook/react';
import Activity from "./activity";

const meta = {
   component: Activity,
   title: "Pages/Activity"
} satisfies Meta<typeof Activity>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
