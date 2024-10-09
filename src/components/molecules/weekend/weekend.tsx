import React, { Dispatch, FC, memo, useState } from "react";
import "./style.scss";
import Button from "../../atoms/button";

interface WeekendPRops {
  className?: string;
  type: string;
  weekends: Array<{ name: string; acr: string; status: boolean }>;
  setWeekends: React.Dispatch<
    React.SetStateAction<Array<{ name: string; acr: string; status: boolean }>>
  >;
}
const Weekend: FC<WeekendPRops> = ({ type, weekends, setWeekends }) => {
  const changeStatusDay = (index: number) => {
    setWeekends(
      weekends.map((day, i) =>
        i === index ? { ...day, status: !day.status } : day
      )
    );
  };
  return (
    <div className={`m-weekend__container ${type === "once" ? "m-weekend__container--hidden" : ""}`}>
      {weekends.map((day, index) => (
        <Button
          onClick={type !== "weekend" ? () => changeStatusDay(index) : () => {}}
          modifier="weekend"
          active={day.status}
          key={index}
          text={day.acr}
        />
      ))}
    </div>
  );
};

export default memo(Weekend) ;
