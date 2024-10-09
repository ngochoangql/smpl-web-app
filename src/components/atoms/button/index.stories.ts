import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
   
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
      text: "Click me",
    },
  };
export const Login: Story = {
  args: {
    text: "Click me",
    modifier:"login",
    icon: "/src/assets/dashboard.svg"
  },
};

export const A: Story = {
  args: {
    text: "Tôi chọn bạn",
    modifier: "login",
    backgroundColor: "#9d9db9",
    padding: "4px",
    color: "#2915bb"
  }
};

export const NaviagateButton: Story = {
  args: {
    text: "Dashboard",
    modifier: "navigate",
    icon: "dashboard",
    padding: "4px 16px 4px 8px",
    width: "250px",
    margin: "0px  0px 12px 0px "
  }
};
  