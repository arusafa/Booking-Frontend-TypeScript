import { Component } from '@angular/core';
import { AuthService } from '../ADMIN/service/auth.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        height: '0px',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
      })),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ])
  ]
})
export class AppComponent {
  title = 'Booking App';
  isOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onLogoutClick() {
    this.authService.logout();
    console.log('User logged out');
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  get currentUserEmail(): string {
    const userDetails = this.authService.getUserDetails();
    return userDetails ? userDetails.email : '';
  }
}
