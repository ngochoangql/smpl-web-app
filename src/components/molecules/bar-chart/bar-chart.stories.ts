
import { Meta, StoryObj } from '@storybook/react';
import BarChart from "./bar-chart";

const meta = {
   component: BarChart,
   title: "Molecules/BarChart"
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
   args: {
      // Thêm các args tại đây
      datas:[],
      labels:[]
   },
};
