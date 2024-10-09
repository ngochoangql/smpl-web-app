import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import Icon from "../../atoms/icon/icon";
import Header from "../../organisms/header/header";
import SideBar from "../../organisms/side-bar/side-bar";
import { DefaultHeader } from "../../organisms/header/header.stories";
import Button from "../../atoms/button";
import { useNavigate } from "react-router-dom";
import { where } from "firebase/firestore";
import { getRelaysDevice, updateRelayStatus } from "../../../api_server";

export interface DeviceDetailProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const DeviceDetail = ({
  margin,
  padding,
  backgroundColor,
  color,
}: DeviceDetailProps) => {
  const [relays, setRelays] = useState([]);
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const deviceId = query.get("device_id");
  const changeRelay = (index) => {
    setRelays(
      relays.map((relay, i) =>
        i === index ? { ...relay, status: !relay.status } : relay
      )
    );
    updateRelayStatus(relays[index].id,!relays[index].status)
  };
  useEffect(() => {
    const fecthData = async () => {
      const result = await getRelaysDevice("relays",[where("device_id","==",deviceId)])
      setRelays(result)
    }
    fecthData()
  },[])
  const handleNavigateAddDevice = useCallback(() => {
    navigate(`/schedule?action=add&device_id=${deviceId}`);
  }, []);
  const handleNavigateCountDown = useCallback(() => {
    navigate(`/countdown?device_id=${deviceId}`);
  }, []);
  
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={"p-device-detail__container"}
    >
      <Header {...DefaultHeader.args} />
      <SideBar />
      <div className="p-device-detail__relay-container">
        {relays.map((relay, index) => (
          <div
            key={index}
            onClick={() => changeRelay(index)}
            className={`p-device-detail__relay ${
              relay.status ? "p-device-detail__relay--active" : ""
            }`}
          >
            <Icon iconName="relay" width="120px" height="120px" />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "32px",
          margin: "32px 16px 16px 16px",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={handleNavigateAddDevice}
          icon="calendar"
          text="Lập lịch"
          modifier="feature"
        />
        <Button
          onClick={handleNavigateCountDown}
          icon="clock-count-down"
          text="Đếm ngược"
          modifier="feature"
        />
        <Button icon="more" text="Nhiều hơn" modifier="feature" />
      </div>
      <div style={{ display: "flex", gap: "32px", margin: "16px" }}>
        {relays.map((relay, index) => (
          <div
            key={index}
            className={`p-device-detail__square ${
              relay.status ? "p-device-detail__square--active" : ""
            }`}
          >
            {relay.status ? "ON" : "OFF"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceDetail;
