import React, { Dispatch, SetStateAction, useState } from "react";
import "./style.scss";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import { devices1 } from "../../../api_server";
import { addDoc, collection, where } from "firebase/firestore";
import { database } from "../../../../firebase";

export interface AddDeviceProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  setDialog?: Dispatch<SetStateAction<boolean>>;
}

const AddDevice = ({
  margin,
  padding,
  backgroundColor,
  color,
  setDialog
}: AddDeviceProps) => {
  const [deviceId, setDeviceId] = useState(null);

  const handleSearchDevice = async (value: string) => {
    const result = await devices1("devices", [where("device_id", "==", value)]);

    if (result.length === 1) {
      setDeviceId(result[0]);
    } else {
      setDeviceId(null);
    }
  };
  const handleAddDevice = async (device_id : string) => {
    const docRef = await addDoc(collection(database, "devices-user"), {
      user_id: localStorage.getItem("user_id"),
      device_id
    });
  }
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={"m-add-device__container"}
    >
      <div className="m-add-device__dialog">
        <div className="m-add-device__dialog-title">Thêm thiết bị</div>
        <Input
          onChange={(e) => handleSearchDevice(e.target.value)}
          type="text"
          modifier="add-device"
        />
        {deviceId && <div className="m-add-device__device"><span>{deviceId.name ?deviceId.name : "--"}</span><span>{deviceId.room?deviceId.room : "--"}</span><span>{deviceId.ip_address?deviceId.ip_address : "--"}</span></div>}
        <div className="m-add-device__dialog-buttons">
          <Button onClick={() => setDialog(false)} text="Hủy" modifier="cancel" />
          <Button onClick={deviceId ? () => {handleAddDevice(deviceId?.device_id); setDialog(false);}: () => {}} text="Xác nhận" modifier="accept" />
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
