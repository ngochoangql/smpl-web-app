import  { useEffect, useState } from "react";
import "./style.scss";
import Device from "../device/device";
import { DeviceModel, DeviceService } from "../../../apis/device/device.api";
import { DeviceUserService } from "../../../apis/device/device-user.api";

export interface GroupDeviceProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  dialog?: boolean;
}
const deviceApi = new DeviceService();
const deviceUserApi = new DeviceUserService();
const GroupDevice = ({
  margin,
  padding,
  backgroundColor,
  dialog,
  color,
}: GroupDeviceProps) => {
  const [devices, setDevices] = useState<DeviceModel[]>([]);
  const user_id: string | null = localStorage.getItem("user_id");

  useEffect(() => {
    deviceUserApi.getDevicesUser(user_id).then((devices) => {
      console.log(devices);
      deviceApi
        .getDeviceByListId(devices.map((device) => device.device_id))
        .then((data: DeviceModel[]) => {
          setDevices(data);
        });
    });
  }, [dialog]);
  const handleChangeStatusDevice = (index : number) => {
    setDevices(
      devices.map((device, i) =>
        i === index ? { ...device, status: !device.status } : device
      )
    );
    deviceApi.updateDevice(devices[index].device_id ,{status:!devices[index].status})
  };
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={"m-group-device__container"}
    >
      <div className="m-group-device__device-name">Smart Plug</div>
      <div className="m-group-device__list">
        {devices &&
          devices.map((device: DeviceModel, index: number) => {
            return <Device onClick={() => handleChangeStatusDevice(index)} key={index} device={device} />;
          })}
      </div>
    </div>
  );
};

export default GroupDevice;
