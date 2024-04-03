import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://booking-backend-seven.vercel.app/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  signup(
    email: string,
    password: string,
    username?: string,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string
  ): Observable<any> {
    // Adjust the object below according to your backend's expected request body
    const userData = {
      email,
      password,
      username,
      firstName,
      lastName,
      phoneNumber,
    };
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
