import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  private baseUrl = "https://booking-backend-seven.vercel.app/admin/room";

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/allRooms`).pipe(
      map((data) => {
        // Flatten the room options and format amenities and bed types
        return data
          .map((room: any) =>
            room.RoomOptions.map((option: any) => ({
              roomId: room._id,
              ...option,
              RoomAmenities: this.formatAmenities(option.RoomAmenities),
              BedType: this.formatBedType(option.BedType),
            }))
          )
          .flat();
      })
    );
  }
  getRoomById(roomId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${roomId}`).pipe(
      map((room) => ({
        roomId: room._id,
        ...room,
        RoomAmenities: this.formatAmenities(room.RoomAmenities),
        BedType: this.formatBedType(room.BedType),
      })
      )
    );
  }

  formatAmenities(amenities: any): string {
    // Convert the amenities object into a string list for display
    return Object.entries(amenities)
      .filter(([key, value]) => key !== "_id" && value) // Filter out the '_id' property and false values
      .map(([key]) => key.replace(/([A-Z])/g, " $1").trim()) // Add space before capital letters for readability
      .join(", "); // Join the array elements into a string separated by commas
  }

  formatBedType(bedType: any): string {
    // Convert the bedType object into a string list for display
    return Object.entries(bedType)
      .filter(([key, value]) => key !== "_id" && value) // Filter out the '_id' property and false values
      .map(([key]) => key.replace(/([A-Z])/g, " $1").trim()) // Add space before capital letters for readability
      .join(", "); // Join the array elements into a string separated by commas
  }

  // More methods as needed for other operations like getHotelById, updateHotel, etc.
}
