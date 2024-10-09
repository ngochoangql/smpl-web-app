import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../firebase";

export interface DeviceOfUsser {
  id: string;
  user_id: string;
  device_id: string;
}
export class DeviceUserService {
  collectionName = "devices-user";
  constructor() {}
  // Add Device User 
  addDeviceUser = async (deviceUser: DeviceOfUsser) => {
    const collectionRef = collection(database, this.collectionName);
    const docRef = await addDoc(collectionRef, deviceUser);
    console.log(docRef);
  };
  // Get Devices User
  getDevicesUser = async (user_id: string | null): Promise<DeviceOfUsser[]> => {
    const collectionRef = collection(database, this.collectionName);
    const querySnapshot = await getDocs(
      query(collectionRef, where("user_id", "==", user_id))
    );
    const result: DeviceOfUsser[] = [];
    querySnapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() } as DeviceOfUsser;
      result.push(data);
    });
    return result;
  };
  
}
