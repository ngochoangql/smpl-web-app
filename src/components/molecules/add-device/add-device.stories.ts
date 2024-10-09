
import { Meta, StoryObj } from '@storybook/react';
import AddDevice from "./add-device";

const meta = {
   component: AddDevice,
   title: "Molecules/AddDevice"
} satisfies Meta<typeof AddDevice>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
