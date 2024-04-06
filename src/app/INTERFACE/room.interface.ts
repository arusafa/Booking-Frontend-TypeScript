export interface RoomMeals {
  Breakfast: boolean;
  Dinner: boolean;
  BreakfastAndDinner: boolean;
}

export interface RoomAmenities {
  Wifi: boolean;
  CableTv: boolean;
  AirCondition: boolean;
  FreeCancellation: boolean;
  NonSmoking: boolean;
}

export interface BedType {
  SingleBed: boolean;
  TwinBed: boolean;
  QueenBed: boolean;
  KingBed: boolean;
}

export interface RoomOption {
  RoomName: string;
  SquareFeet: number;
  RoomMeals: RoomMeals;
  RoomAmenities: RoomAmenities;
  RoomImages: string[];
  NumberOfBeds: number;
  NumOfEmptyRooms: number;
  Price: number;
  NumberOfGuests: number;
  BedType: BedType;
}

export interface Room {
  _id?: string; // MongoDB unique identifier
  RoomOptions: RoomOption[];
}