
import React, { useState } from "react";
import "./style.scss";
import { DefaultHeader } from "../../organisms/header/header.stories";
import SideBar from "../../organisms/side-bar/side-bar";
import Header from "../../organisms/header/header";
import Spiner from "../../molecules/spiner/spiner";
import TimePicker from "../../molecules/time-picker/time-picker";
import Button from "../../atoms/button";

export interface CountDownProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const CountDown = ({ margin, padding, backgroundColor, color }: CountDownProps) => {
  const [hours,setHours] = useState(0)
  const [minutes,setMinutes] = useState(0)
  return (
    <div style={{ margin, padding, backgroundColor, color }} className={'p-count-down__container'}>
    <Header {...DefaultHeader.args} />
    <SideBar />
    <TimePicker  hours={hours} minutes={minutes} setHoures={setHours} setMinutes={setMinutes} margin="200px 0 0 0"/>
    <Button modifier="button-default" text="Xác nhận" margin="240px 16px 0 16px "/>
    </div>
  );
};

export default CountDown;
