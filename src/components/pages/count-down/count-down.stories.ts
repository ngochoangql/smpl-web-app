
import { Meta, StoryObj } from '@storybook/react';
import CountDown from "./count-down";

const meta = {
   component: CountDown,
   title: "Pages/CountDown"
} satisfies Meta<typeof CountDown>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
