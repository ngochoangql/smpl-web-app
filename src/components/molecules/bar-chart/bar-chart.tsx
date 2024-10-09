import React, { memo, useEffect, useRef, useState } from "react";
import "./style.scss";

export interface BarChartProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  datas: Array<number>;
  labels: Array<string>;
}

const BarChart = ({
  margin,
  padding,
  backgroundColor,
  color,
  datas,
  labels,
}: BarChartProps) => {
  const barChartRef = useRef<any>();
  const [gap, setGap] = useState(0);
  const [unit, setUnit] = useState(0);
  useEffect(() => {
    setUnit(200 / Math.max(...datas));
    setGap(barChartRef.current.offsetWidth / (2 * datas.length));
    window.addEventListener("resize", () => {
      if (barChartRef.current) {
        console.log("Bar chart width:", barChartRef.current.offsetWidth);

        setGap(barChartRef.current.offsetWidth / (2 * datas.length));
      }
    });
  }, []); // Chỉ chạy sau khi component được gắn vào DOM
  const renderAxisY1 = () => {
    const result = [];

    let chunk = 0;
    if (Math.max(...datas) > 99 && Math.max(...datas) < 1000) {
      chunk = 100;
    }
    if (Math.max(...datas) > 999 && Math.max(...datas) < 10000) {
      chunk = 1000;
    }
    if (Math.max(...datas) > 9999 && Math.max(...datas) < 100000) {
      chunk = 10000;
    }
    const length = Math.round(Math.max(...datas) / chunk);
    for (let i = 0; i < length; i++) {
      result.push(
        <span
          className="axis-y1--label"
          key={i}
          style={{
            "--width": `${gap * 1}px`,
            "--bottom": `${chunk * i * unit - 8}px`,
          } as React.CSSProperties}
        >
          {chunk * i}
        </span>
      );
    }
    result.push(
      <span
        className="axis-y1--label"
        key={length}
        style={{
          "--width": `${gap * 1}px`,
          "--bottom": `${Math.max(...datas) * unit - 8}px`,
        } as React.CSSProperties}
      >
        {Math.max(...datas)}
      </span>
    );
    return result;
  };
  const renderAxisY2 = () => {
    const result = [];

    let chunk = 0;
    if (Math.max(...datas) > 99 && Math.max(...datas) < 1000) {
      chunk = 100;
    }
    if (Math.max(...datas) > 999 && Math.max(...datas) < 10000) {
      chunk = 1000;
    }
    if (Math.max(...datas) > 9999 && Math.max(...datas) < 100000) {
      chunk = 10000;
    }
    const length = Math.max(...datas) / chunk;
    for (let i = 0; i < length; i++) {
      result.push(
        <span
          className="axis-y2--label"
          key={i}
          style={{
            "--width": `${gap * 1}px`,
            "--bottom": `${chunk * i * unit - 8}px`,
          } as React.CSSProperties}
        >
          {chunk * i}
        </span>
      );
    }
    result.push(
      <span
        className="axis-y2--label"
        key={length}
        style={{
          "--width": `${gap * 1}px`,
          "--bottom": `${Math.max(...datas) * unit - 8}px`,
        } as React.CSSProperties}
      >
        {Math.max(...datas)}
      </span>
    );
    return result;
  };
  console.log("Gap :", gap, "Unit :", unit);
  return (
    <div
      ref={barChartRef}
      style={{ margin, padding, backgroundColor, color }}
      className={"m-bar-chart__container"}
    >
      {datas.map((data: number, index: number) => (
        <span
          key={`${index}-${data}${Math.random()}`}
          className="m-bar-chart__item"
          style={{
            "--width": `${gap * 1}px`,
            "--height": `${data * unit}px`,
            "--left": `${
              gap * (index + 1) +
              1 * gap * index -
              0.5 * gap -
              (index % 2 !== 0 ? 0.75 * gap : 0)
            }px`,
            backgroundColor: index % 2 === 0 ? "#8FD14F" : "#697565",
          } as React.CSSProperties}
        ></span>
      ))}
      {/* <span className="m-bar-chart__item" style={{"--left":`150px`}}></span> */}
      <div className="axis-x--label">
        {" "}
        {labels.map((label: string, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              '--width': `${gap * 2 + 0.75}px`,
              '--left': `${index === 0 ? "10px" : "50%"}`,
            } as React.CSSProperties}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: index % 2 === 0 ? "#8FD14F" : "#697565",
              }}
            ></div>
            {label}{" "}
          </div>
        ))}
      </div>
      {renderAxisY1().map((data) => data)}
      {renderAxisY2().map((data) => data)}
    </div>
  );
};

export default memo (BarChart);
