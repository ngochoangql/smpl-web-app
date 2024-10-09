import { Meta, StoryObj } from "@storybook/react";
import Header from "./header";

const meta = {
    component: Header,
    title:"Organisms/Header"
    
}satisfies Meta<typeof Header>
export default meta

type Story = StoryObj<typeof meta>

export const DefaultHeader : Story = {
    args:{
        backgroundColor: "#d5baba85",
        padding: "10px",
        margin: ""
    }
}

