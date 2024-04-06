import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://booking-backend-seven.vercel.app/auth";

  constructor(private http: HttpClient, private router: Router) {}

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
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  getRole(): string | null {
    return localStorage.getItem("role");
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  setRole(role: string): void {
    localStorage.setItem("role", role);
    const storedRole = localStorage.getItem("role");
    console.log("Stored role immediately after setting:", storedRole);
  }

  isAdmin(): boolean {
    const role = this.getRole();
    return role?.trim().toLowerCase() === "admin";
  }

  getUserDetails(): any {
    const userDetails = localStorage.getItem("user");
    return userDetails ? JSON.parse(userDetails) : null;
  }
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
