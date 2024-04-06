export interface RoomOption {
  _id?: string;  // Optional MongoDB unique identifier for the room option
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