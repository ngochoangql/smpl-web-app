
import { Meta, StoryObj } from '@storybook/react';
import Weather from "./weather";

const meta = {
   component: Weather,
   title: "Molecules/Weather"
} satisfies Meta<typeof Weather>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
   },
};
