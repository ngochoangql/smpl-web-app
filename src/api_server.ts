import {
  query,
  collection,
  QueryConstraint,
  getDocs,
  where,
  doc,
  runTransaction,
} from "firebase/firestore";
import {  database } from "../firebase";


// Định nghĩa một interface cho dữ liệu Firestore (ví dụ)
interface User {
  id: string;
  name: string;
  age: number;
  // thêm các thuộc tính khác nếu cần
}
interface Relay {
    id: string;
    relay_id: string;
    device_id: string;
    name: string;
    status: boolean;
    // thêm các thuộc tính khác nếu cần
  }
interface DeviceOfUsser {
  id: string;
  user_id: string;
  device_id: string;
}
interface Device {
  id: string;
  device_id: string;
  room: string;
  latitude: string;
  longitude: string;
  ip_address: string;
  relay_num: number;
  // thêm các thuộc tính khác nếu cần
}
const user_id = localStorage.getItem("user_id");
export const login = async (
  collectionName: string,
  wheres: Array<QueryConstraint>
): Promise<User[]> => {

  

  const collectionRef = collection(database, collectionName);
  const querySnapshot = await getDocs(
    query(collectionRef, ...wheres, where("uid", "==", user_id))
  );
  const result: User[] = [];

  querySnapshot.forEach((doc) => {
    // Thêm ID vào dữ liệu nếu cần thiết
    const data = { id: doc.id, ...doc.data() } as User;
    result.push(data);
  });

  return result;
};
export const devicesOfUser = async (
  collectionName: string,
  wheres: Array<QueryConstraint>
): Promise<DeviceOfUsser[]> => {
 

  
  const collectionRef = collection(database, collectionName);
  const querySnapshot = await getDocs(
    query(collectionRef, ...wheres)
  );
  const result: DeviceOfUsser[] = [];
  querySnapshot.forEach((doc) => {
    // Thêm ID vào dữ liệu nếu cần thiết
    const data = { id: doc.id, ...doc.data() } as DeviceOfUsser;
    result.push(data);
  });
  return result;
};
export const devices1 = async (
  collectionName: string,
  wheres: Array<QueryConstraint>
): Promise<Device[]> => {
  
  const collectionRef = collection(database, collectionName);
  const querySnapshot = await getDocs(
    query(collectionRef, ...wheres)
  );
  const result: Device[] = [];
  querySnapshot.forEach((doc) => {
    // Thêm ID vào dữ liệu nếu cần thiết
    const data = { id: doc.id, ...doc.data() } as Device;
    result.push(data);
  });
  return result;
};
export const device = async (
  collectionName: string,
  wheres: Array<QueryConstraint>
): Promise<Device[]> => {
  const collectionRef = collection(database, collectionName);
  const querySnapshot = await getDocs(
    query(collectionRef, ...wheres)
  );
  const result: Device[] = [];
  querySnapshot.forEach((doc) => {
    // Thêm ID vào dữ liệu nếu cần thiết
    const data = { id: doc.id, ...doc.data() } as Device;
    result.push(data);
  });
  return result;
};

export const getRelaysDevice = async (
    collectionName: string,
    wheres: Array<QueryConstraint>
  ): Promise<Relay[]> => {
    const collectionRef = collection(database, collectionName);
    const querySnapshot = await getDocs(
      query(collectionRef, ...wheres)
    );
    const result: Relay[] = [];
    querySnapshot.forEach((doc) => {
      // Thêm ID vào dữ liệu nếu cần thiết
      const data = { id: doc.id, ...doc.data() } as Relay;
      result.push(data);
    });
    return result;
  };
export const updateDeviceStatus = async (id:string,status : boolean) => {
    const deviceRef = doc(database,"devices",id);
    await runTransaction(database, async (transaction) => {
        const deviceDoc = await transaction.get(deviceRef)
        if (!deviceDoc.exists()){
            throw "Device Not Exist!";
        }
        transaction.update(deviceRef,{status})
    })
}
export const updateRelayStatus = async (id:string,status : boolean) => {
    const relayRef = doc(database,"relays",id);
    await runTransaction(database, async (transaction) => {
        const relayDoc = await transaction.get(relayRef)
        if (!relayDoc.exists()){
            throw "Relay Not Exist!";
        }
        transaction.update(relayRef,{status})
    })
}