
import { Meta, StoryObj } from '@storybook/react';
import Device from "./device";

const meta = {
   component: Device,
   title: "Molecules/Device"
} satisfies Meta<typeof Device>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
      device: null
   },
};
