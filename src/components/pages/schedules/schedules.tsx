import React, { useState } from "react";
import "./style.scss";
import Header from "../../organisms/header/header";
import { DefaultHeader } from "../../organisms/header/header.stories";
import SideBar from "../../organisms/side-bar/side-bar";
import ScheduleList from "../../molecules/schedule-list/schedule-list";

export interface SchedulesProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const Schedules = ({
  margin,
  padding,
  backgroundColor,
  color,
}: SchedulesProps) => {
  
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={"p-schedules__container"}
    >
      <Header {...DefaultHeader.args} />
      <SideBar />
      <ScheduleList/>
    </div>
  );
};

export default Schedules;
