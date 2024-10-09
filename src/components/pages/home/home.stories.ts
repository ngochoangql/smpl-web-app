import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./home";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};