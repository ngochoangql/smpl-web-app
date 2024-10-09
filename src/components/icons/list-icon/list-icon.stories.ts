import { Meta, StoryObj } from '@storybook/react';
import ListIcon from './list-icon';

const meta = {
   component:ListIcon,
   title: 'List/Icon'
} satisfies Meta<typeof ListIcon>
export default meta

type Story = StoryObj<typeof meta>
export const Default : Story = {
   args:{
      color: "#ffffff",
      backgroundColor: "#ffffff",
      margin: "",
      padding: "8px"
   }
}