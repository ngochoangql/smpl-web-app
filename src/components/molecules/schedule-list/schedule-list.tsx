
import React, { memo, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Switch from "../switch/switch";
import Icon from "../../atoms/icon/icon";

export interface ScheduleListProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  
}

const ScheduleList = ({ margin, padding, backgroundColor, color }: ScheduleListProps) => {
  const [schedules, setSchedules] = useState([
    {
      scheduleId: "123123120",
      time: "15:40",
      action: "ON",
      repeatType: "once",
      repeatDay: "",
      active:true,
    },
    {
      scheduleId: "123123120",
      time: "15:40",
      action: "ON",
      repeatType: "once",
      repeatDay: "Th2 Th3 Th4 Th5 Th6 Th5 Th6 Th5 Th6",
      active:false,
    },
    
  ]);
  const changeScheduleStatus = (index) => {
    setSchedules(schedules.map((schedule,i) => i === index ? {...schedule,active:!schedule.active} : schedule))
  }
  const navigate = useNavigate()
  return (
    <div  style={{ margin, padding, backgroundColor, color }} className={'m-schedule-list__container'}>
    
        {schedules.map((schedule, index) => (
          <div  key={index} className="m-schedule-list--item">
            <div className="m-schedule-list--item-left">
            <p>{schedule.time}</p>
            <p>{schedule.action}</p>
            <p>{schedule.repeatType}</p>
            <p style={{overflow:"hidden",textOverflow:"ellipsis",width:"100%",whiteSpace: "nowrap"}}>{schedule.repeatDay}</p></div>
            <div className="m-schedule-list--item-right">
             
                <Icon onClick={() => navigate(`/schedule?action=update&schedule_id=${schedule.scheduleId}`)} iconName="detail"/>
                <Switch active={schedule.active} onClick={() => changeScheduleStatus(index)}/>
            </div>
            
          </div>
        ))}
  
    </div>
  );
};

export default memo (ScheduleList);
