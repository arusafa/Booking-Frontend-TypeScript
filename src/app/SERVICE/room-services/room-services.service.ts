import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FormatListPipe } from "../../pipes/format-list.pipe";
import { Room } from "../../INTERFACE/room.interface";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  private baseUrl = "https://booking-backend-seven.vercel.app/admin/room";
  formatListPipe = new FormatListPipe();

  constructor(private http: HttpClient) {}

  createRoom(roomData: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/newRoom`, roomData, { headers });
}








  getAllRooms(): Observable<Room[]> {
    return this.http.get<any>(`${this.baseUrl}/allRooms`).pipe(
      map((rooms) =>
        rooms.map((room: any) => ({
          ...room,
          RoomOptions: room.RoomOptions.map((option: any) => ({
            ...option,
            RoomAmenities: this.formatListPipe.transform(option.RoomAmenities),
            BedType: this.formatListPipe.transform(option.BedType),
            RoomMeals: this.formatListPipe.transform(option.RoomMeals),
          })),
        }))
      )
    );
  }

  getRoomById(roomId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${roomId}`).pipe(
      map((room) => ({
        roomId: room._id,
        ...room,
        RoomAmenities: this.formatAmenities(room.RoomAmenities),
        BedType: this.formatBedType(room.BedType),
      }))
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
