import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
  } satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type:"text",
    placeHolder:"Default"
  },
};
export const Login: Story = {
  args: {
    type:"text",
    placeHolder:"Login",
    modifier:"login"
  },
};

export const SearchInput: Story = {
  args: {
    type: "text",
    placeHolder: "Search.....",
    modifier: "search"
  }
};
  