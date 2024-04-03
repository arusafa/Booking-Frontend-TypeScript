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

  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allHotels`);
  }

  getHotelById(hotelId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${hotelId}`);
  }

  createHotel(hotel: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/newHotel`, hotel, { headers });
  }

  addRoomToHotel(hotelId: string, room: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/${hotelId}/addRoom`, room, {
      headers,
    });
  }

  updateHotel(hotelId: string, hotelData: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not available");
    }
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);

    // Ensure the URL includes the actual hotelId rather than the placeholder ':hotelId'
    return this.http.put(`${this.baseUrl}/${hotelId}`, hotelData, { headers });
  }

  // More methods as needed for other operations
}
