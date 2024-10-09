import { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    backgroundColorHover:{ control: "color" },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#000000",
    iconName: "dashboard",
    width: "24px",
    padding: "8px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    height: "24px",
    backgroundColorHover: "rgba(255, 255, 255, 0)",
    modifier:"dark",
    onClick: () => {}
  }
};


export const IconDark: Story = {
  args: {
    color: "#eddddd",
    iconName: "dashboard",
    width: "24px",
    padding: "8px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    height: "24px",
    modifier:"dark",
    backgroundColorHover: "rgba(255, 255, 255, 0)"
  }
};


  