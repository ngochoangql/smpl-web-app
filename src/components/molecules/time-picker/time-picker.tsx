import React, { FC, memo, useEffect } from "react";
import "./style.scss";
import Spiner from "../spiner/spiner";
interface TimePickerProps {
  minutes: number;
  hours: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setHoures: React.Dispatch<React.SetStateAction<number>>;
  margin?: string;
}
const hoursList = [
  "  ",
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  " ",
];
const minutesList = [
  "  ",
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "  ",
];
const TimePicker: FC<TimePickerProps> = ({
  minutes,
  hours,

  setMinutes,
  setHoures,
  margin
}) => {
  return (
    <div className="m-timepicker__container" style={{margin}}>
      <Spiner
        type="hour"
        value={hours}
        spinerList={hoursList}
        setValue={setHoures}
      />
      <Spiner
        type="minute"
        value={minutes}
        spinerList={minutesList}
        setValue={setMinutes}
      />
    </div>
  );
};

export default memo (TimePicker);
