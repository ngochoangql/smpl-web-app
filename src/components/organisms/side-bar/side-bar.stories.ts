import { Meta, StoryObj } from '@storybook/react';
import SideBar from './side-bar';

const meta = {
   component:SideBar,
   title: 'Organisms/SideBar'
} satisfies Meta<typeof SideBar>
export default meta

type Story = StoryObj<typeof meta>
export const Default : Story = {
   args:{
      left: "0px",
      backgroundColor: "#e9e5e5"
   }
}