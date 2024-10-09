import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { database } from "../../../firebase";

export interface DeviceModel {
  id: string;
  device_id: string;
  name:string;
  room: string;
  latitude: string;
  longitude: string;
  ip_address: string;
  relay_num: number;
  status:boolean;
}

export class DeviceService {
  collectionName = "devices";
  constructor() {}
  // Add Device
  addDevice = async (device: DeviceModel) => {
    const collectionRef = collection(database, this.collectionName);
    const docRef = await addDoc(collectionRef, device);
    console.log(docRef);
  };
  // Get All Device
  getDevices = async (): Promise<DeviceModel[]> => {
    const collectionRef = collection(database, this.collectionName);
    const querySnapshot = await getDocs(query(collectionRef));
    const result: DeviceModel[] = [];
    querySnapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() } as DeviceModel;
      result.push(data);
    });
    return result;
  };
  // Get Device By Id
  getDeviceById = async (id: string): Promise<DeviceModel> => {
    const docRef = doc(database, this.collectionName, id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      // Nếu tài liệu tồn tại, trả về dữ liệu của nó
      const result: DeviceModel = docSnapshot.data() as DeviceModel;
      return result;
    } else {
      throw new Error("Device not found!");
    }
  };
  getDeviceByListId = async (ids: Array<string>): Promise<DeviceModel[]> => {
    // console.log(ids);
    const collectionRef = collection(database, this.collectionName);
    const querySnapshot = await getDocs(
      query(collectionRef, where("device_id", "in", ids))
    );

    const result: DeviceModel[] = [];
    querySnapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() } as DeviceModel;
      result.push(data);
    });
    return result;
  };
  // Update Device
  updateDevice = async (device_id: string, newData: Partial<DeviceModel>) => {
    const devicesRef = collection(database, this.collectionName);
    const q = query(devicesRef, where('device_id', '==', device_id));

    const querySnapshot = await getDocs(q);

    // 2. Duyệt qua tất cả tài liệu phù hợp
    querySnapshot.forEach(async (docSnapshot) => {
      // 3. Lấy reference của tài liệu và cập nhật
      const docRef = doc(database, this.collectionName, docSnapshot.id);
      await updateDoc(docRef, newData);
    });
  };
  // Delete Device
  deleteDevice = async (id: string) => {
    const docRef = doc(database, this.collectionName, id);
    await deleteDoc(docRef);
  };
}
