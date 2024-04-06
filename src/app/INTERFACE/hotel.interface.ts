// hotel.interface.ts
import { RoomOption } from './room.interface';

export interface Hotel {
  _id?: string;  // Optional MongoDB unique identifier for the hotel
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
  hotelReviews: HotelReview[];
  hotelDetails: {
    AirportDistance: number; 
    DowntownDistance: number; 
    SeaDistance: number; 
  };
  rooms: RoomOption[];  // Updated to directly include RoomOption objects
}

export interface HotelReview {
  userId: string;  // Assuming you have a User interface with an '_id' field
  rating: number;
  reviewText: string;
}
