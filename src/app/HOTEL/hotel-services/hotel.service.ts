import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  private baseUrl = 'http://localhost:3001/admin/hotel';

  constructor(private http: HttpClient, private router: Router) { }

  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allHotels`);
  }

  createHotel(hotel: any): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Token not available");
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.baseUrl}/newHotel`, hotel, { headers });
  }

  // More methods as needed for other operations like getHotelById, updateHotel, etc.
}
