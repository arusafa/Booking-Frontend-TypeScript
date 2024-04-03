import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  private baseUrl = 'https://booking-backend-seven.vercel.app/admin/room';

  constructor(private http: HttpClient, private router: Router) { }

  getAllRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allRooms`);
  }

  createRoom(room: any): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.baseUrl}/newRoom`, room, { headers });
  }

  // More methods as needed for other operations like getHotelById, updateHotel, etc.
}
