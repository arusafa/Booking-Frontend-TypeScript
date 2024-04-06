import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  private baseUrl = "https://booking-backend-seven.vercel.app/admin/hotel";

  constructor(private http: HttpClient, private router: Router) {}

  //Get rooms by hotel ID
  getRoomsByHotelId(hotelId: string): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/hotel-rooms/${hotelId}`, { headers });
  }

  // Get all hotels
  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allHotels`);
  }

  // Get a hotel by ID
  getHotelById(hotelId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${hotelId}`);
  }

  // Create a hotel
  createHotel(hotelData: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/newHotel`, hotelData, { headers });
  }

  // Add a room to a hotel
  addRoomToHotel(hotelId: string, room: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/addRoom/${hotelId}`, room, {
      headers,
    });
  }

  // Update a hotel
  updateHotel(hotelId: string, hotelData: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.put(`${this.baseUrl}/${hotelId}`, hotelData, { headers });
  }

  // More methods as needed for other operations
  deleteRoom(hotelId: string, roomId: string): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.delete(`${this.baseUrl}/${hotelId}/${roomId}`, { headers });
  }

  deleteHotel(hotelId: string): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.delete(`${this.baseUrl}/${hotelId}`, { headers });
  }
}
