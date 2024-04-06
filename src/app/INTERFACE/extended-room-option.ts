import { Room, RoomOption } from "./room.interface";
export interface ExtendedRoomOption extends RoomOption {
  roomId?: string; // Add an optional roomId property
}
export interface ExtendedRoom extends Room {
  _id?: string; // Add an optional _id property
}
