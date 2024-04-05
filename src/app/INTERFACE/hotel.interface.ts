// hotel.interface.ts
import { Room } from './room.interface';

export interface Hotel {
  hotelName: string;
  hotelAddress: {
    Country: string;
    City: string;
    Province: string;
    PostalCode: string;
  };
  hotelRating: number;
  hotelAmenities: {
    Pool: boolean; 
    Gym: boolean; 
    AirportShuttle: boolean; 
    Pets: boolean; 
  };
  hotelDescription: {
    Images: string[];
    Description: string;
  };
  hotelDetails: {
    AirportDistance: number; 
    DowntownDistance: number; 
    SeaDistance: number; 
  };
  rooms: Room[];
}
