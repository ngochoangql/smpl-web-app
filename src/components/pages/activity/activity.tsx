import React, { useEffect, useState } from "react";
import "./style.scss";
import { DefaultHeader } from "../../organisms/header/header.stories";
import Header from "../../organisms/header/header";
import SideBar from "../../organisms/side-bar/side-bar";
import BarChart from "../../molecules/bar-chart/bar-chart";

export type ActivityProps = {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const Activity: React.FC<ActivityProps> = ({
  margin,
  padding,
  backgroundColor,
  color,
}) => {
  const datas = [12, 425, 300, 654, 300, 222, 300, 400, 312, 862, 123, 462, 310, 201];
  function generateRandomArray(sourceArray : Array<number>, size: number) {
    const randomArray = [];
    
    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * sourceArray.length);
      randomArray.push(sourceArray[randomIndex]);
    }
  
    return randomArray;
  }
  const [dataGrahp,setDataGraph] = useState(generateRandomArray(datas,14))
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={"p-activity__container"}
    >
      <Header {...DefaultHeader.args} />
      <SideBar/>
        <BarChart datas={dataGrahp} labels={["Số giờ hoạt động","Số kwh đã tiêu thụ"]}/>
        <div className="p-activity__item">
          <span className="p-activity__item-name">Total Hour :</span>
          <span className="p-activity__item-value">23.5</span>
        </div>
        <div className="p-activity__item">
          <span>Số Kwh đã tiêu thụ</span>
        <span>250kWh</span>

      </div>
      <div className="p-activity__item">aa</div>
      <div className="p-activity__item">aaa</div>
      <DateRangeChunk onDateChange={date => {setDataGraph(generateRandomArray(datas,14))}} />
    </div>
  );
};

export default Activity;

type DateRangeChunkProps = {
  onDateChange?: (date: Date) => void;
}

const DateRangeChunk: React.FC<DateRangeChunkProps> = ({onDateChange}) => {
  const now = new Date();
  const [day, setDay] = useState(now);
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");

  function convertDay(date: Date) {
    const day = date.getUTCDate().toString().padStart(2, "0"); // Đảm bảo có 2 chữ số
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0, nên +1
    const formattedDate = `${day}/${month}`;

    return formattedDate;
  }
  
  function getStartAndEndOfWeek(date: Date) {
    const startOfWeek = new Date(date);
    const endOfWeek = new Date(date);
    // Cài đặt thứ Hai là ngày đầu tuần
    const dayOfWeek = startOfWeek.getDay(); // 0 (Chủ nhật) đến 6 (Thứ Bảy)
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Nếu là Chủ nhật thì lùi 6 ngày, còn lại thì lùi đến thứ Hai

    startOfWeek.setDate(startOfWeek.getDate() + diffToMonday); // Ngày đầu tuần

    if (
      startOfWeek.getDate() + 6 >
      new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth() + 1,
        0
      ).getDate()
    ) {
      endOfWeek.setDate(
        startOfWeek.getDate() +
          6 -
          new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
      ); // Ngày cuối tuần (6 ngày sau)
      endOfWeek.setMonth(endOfWeek.getMonth() + 1);
    } else {
      endOfWeek.setDate(startOfWeek.getDate() + 6);
    }

    setStartDay(convertDay(startOfWeek));
    setEndDay(convertDay(endOfWeek));
  }

  function subtractDays(date: Date) {
    const newDate = new Date(date);

    newDate.setDate(newDate.getDate() - 7); // Lùi về 'days' ngày
    setDay(newDate)

    return newDate;
  }
  
  function addtractDays(date: Date) {
    const newDate = new Date(date);

    newDate.setDate(newDate.getDate() + 7); // Lùi về 'days' ngày
    setDay(newDate)

    onDateChange?.(newDate)

    return newDate;
  }

  useEffect(() => {
    getStartAndEndOfWeek(day);
  }, [day]);



  return(
    <div className="p-activity__week">
        <div onClick={() => subtractDays(day)} >{"<"} </div>
        <div>{startDay + "-" + endDay}</div>
        <div onClick={() =>   addtractDays(day)}>{">"}</div>
      </div>
  )
}
