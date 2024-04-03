import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl = 'https://booking-backend-seven.vercel.app/admin/hotel';

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allHotels`);
  }

  //more methods as needed for other operations like getHotelById, createHotel, updateHotel, etc.
}
