
import { Meta, StoryObj } from '@storybook/react';
import DeviceDetail from "./device-detail";

const meta = {
   component: DeviceDetail,
   title: "Pages/DeviceDetail"
} satisfies Meta<typeof DeviceDetail>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
