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

  createHotel(hotelData: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/newHotel`, hotelData, { headers });
  }

  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allHotels`);
  }

  getHotelById(hotelId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${hotelId}`);
  }

  getRoomsByHotelId(hotelId: string): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not available');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/getRooms/${hotelId}`, { headers });
  }

  addRoomToHotel(hotelId: string, room: any): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not available');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/addRoom/${hotelId}`, room, {
      headers,
    });
  }

  updateHotel(hotelId: string, hotelData: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.put(`${this.baseUrl}/${hotelId}`, hotelData, { headers });
  }

  // More methods as needed for other operations
}
