import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import Header from "../../organisms/header/header";
import { DefaultHeader } from "../../organisms/header/header.stories";
import TimePicker from "../../molecules/time-picker/time-picker";
import Weekend from "../../molecules/weekend/weekend";
import Switch from "../../molecules/switch/switch";
import Radio from "../../molecules/radio/radio";
import Button from "../../atoms/button";
import SideBar from "../../organisms/side-bar/side-bar";
import { ScheduleApi } from "../../../apis/schedule/schedule.api";

export interface ScheduleActionProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}
const repeatTypes = [
  { type: "once", text: "Một lần" },
  { type: "weekend", text: "Hằng tuần" },
  { type: "every", text: "Tùy chọn" },
];
const ScheduleAction = ({
  margin,
  padding,
  backgroundColor,
  color,
}: ScheduleActionProps) => {
  const now = new Date();
  const [hours, setHours] = useState(now.getHours());
  const [minutes, setMinutes] = useState(now.getMinutes());
  const [repeatType, setRepeatType] = useState("once");
  const [action, setAction] = useState(false);
  const [weekends, setWeekends] = useState([
    { name: "Monday", acr: "MON", status: false },
    { name: "Tuesday", acr: "TUE", status: false },
    { name: "Wednesday", acr: "WED", status: false },
    { name: "Thursday", acr: "THU", status: false },
    { name: "Friday", acr: "FRI", status: false },
    { name: "Saturday", acr: "SAT", status: false },
    { name: "Sunday", acr: "SUN", status: false },
  ]);
  const [relays, setRelays] = useState([
    { relayId: "121113", name: "R1", active: true },
    { relayId: "1222323", name: "R12", active: false },
    { relayId: "2222", name: "2R1", active: false },
  ]);
  const setRelay = (index: number) => {
    setRelays(
      relays.map((relay, i) =>
        index === i ? { ...relay, active: !relay.active } : relay
      )
    );
  };
  useEffect(() => {
    if (repeatType === "every") {
      setWeekends(
        weekends.map((day, i) => (true ? { ...day, status: false } : day))
      );
    }
    if (repeatType === "weekend") {
      setWeekends(
        weekends.map((day, i) => (true ? { ...day, status: true } : day))
      );
    }
  }, [repeatType]);
  const handleChangeAction = useCallback(() => {
    setAction(!action);
  }, [action]);
  const handleChangeRepeatType = useCallback(
    (type: string) => {
      setRepeatType(type);
    },
    [repeatType]
  );
  const query = new URLSearchParams(window.location.search);
  const actionSchedule = query.get("action");
  const device_id = query.get("device_id");
  const converRelays = () => {
   
    let  relaysSelected = "";
    for (let i = 0; i < relays.length; i++) {
      relaysSelected += relays[i].active ? relays[i].relayId + " " : "";
    }
    return relaysSelected;
  };
  const converDays = () => {
    const dayString: string[] = [
      "Th2",
      "Th3",
      "Th4",
      "Th5",
      "Th6",
      "Th7",
      "CN",
    ];
    let days = "";
    for (let i = 0; i < weekends.length; i++) {
      days += weekends[i].status ? dayString[i] + " " : "";
    }
    return days;
  };
  const handelScheduleAction = () => {
    console.log();
    const schedule: ScheduleApi = {
      time24h:
        (hours - 1).toString().padStart(2, "0") +
        ":" +
        (minutes - 1).toString().padStart(2, "0"),
      time12h:
        (hours > 12 ? hours - 13 : hours - 1).toString().padStart(2, "0") +
        ":" +
        (minutes - 1).toString().padStart(2, "0"),
      session: hours > 12 ? "PM" : "AM",
      day_repeat: converDays(),
      repeat_type: repeatType,
      action: action,
      device_id,
      relays:converRelays()
    };
    console.log(schedule);
  };
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={"p-schedule-action__container"}
    >
      <Header {...DefaultHeader.args} />
      <SideBar />
      <div className="p-schedule-action__timepicker">
        <TimePicker
          hours={hours}
          minutes={minutes}
          setHoures={setHours}
          setMinutes={setMinutes}
        />
      </div>
      <Weekend
        type={repeatType}
        weekends={weekends}
        setWeekends={setWeekends}
      />
      <div className="p-schedule-action__action-mode">
        <p>Action mode</p>{" "}
        <Switch active={action} onClick={handleChangeAction} />
      </div>
      <div className="p-schedule-action__repeat-type">
        <p>Action mode</p>{" "}
        <div className="p-schedule-action__radio-group">
          {repeatTypes.map((repeat, index) => (
            <Radio
              type={repeat.type}
              key={index}
              status={repeatType === repeat.type}
              onClick={handleChangeRepeatType}
              text={repeat.type}
            />
          ))}
        </div>
      </div>
      <div className="p-schedule-action__device">
        {relays.map((relay, index) => (
          <div
            onClick={() => setRelay(index)}
            key={index}
            className={`p-schedule-action__device-item ${
              relay.active ? `p-schedule-action__device-item--active` : ""
            } `}
          >
            {relay.name}
          </div>
        ))}
      </div>
      <Button
        onClick={handelScheduleAction}
        modifier="button-default"
        text={actionSchedule === "add" ? "Thêm" : "Cập nhật"}
      />
    </div>
  );
};

export default ScheduleAction;
