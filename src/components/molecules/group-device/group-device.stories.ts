
import { Meta, StoryObj } from '@storybook/react';
import GroupDevice from "./group-device";

const meta = {
   component: GroupDevice,
   title: "Molecules/GroupDevice"
} satisfies Meta<typeof GroupDevice>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
