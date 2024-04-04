import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-services/hotel.service';
import { RoomService } from '../../ROOM/room-services/room-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  currentHotelIndex: number = 0;
  constructor(private hotelService: HotelService, private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.fetchHotels();
    this.fetchAllRooms();
  }

  fetchHotels(): void {
    this.hotelService.getAllHotels().subscribe(
      data => {
        this.hotels = data;
        this.hotels.forEach((hotel, index) => {
          this.roomService.getRoomsByHotelId(hotel._id).subscribe(
            roomData => {
              this.hotels[index].rooms = roomData;
              console.log('Rooms for hotel:', roomData);
              console.log('Hotels:', this.hotels);
            },
            error => console.error('Error fetching rooms:', error)
          );
        });
      },
      error => console.error('Error fetching hotels:', error)
    );
  }

  fetchAllRooms(): void {
    this.roomService.getAllRooms().subscribe(
      data => {
        console.log('All rooms:', data);
      },
      error => console.error('Error fetching all rooms:', error)
    );
  }
  onEditRoute(){
    this.router.navigate(['update-hotel/:id']);
  }

  /*
  // Sliding functionality
  nextHotel(): void {
    if (this.currentHotelIndex < this.hotels.length - 1) {
      this.currentHotelIndex++;
    } else {
      this.currentHotelIndex = 0; // Loop back to first
    }
  }

  prevHotel(): void {
    if (this.currentHotelIndex > 0) {
      this.currentHotelIndex--;
    } else {
      this.currentHotelIndex = this.hotels.length - 1; // Loop back to last
    }
  }

  /
  viewRooms(hotel: any): void {
    // Logic to view rooms, e.g., navigate to a room details page or open a modal
    console.log('Viewing rooms for hotel:', hotel.HotelName);
    // Example of navigating to a new route
    this.router.navigate(['/hotel-rooms', hotel._id]);
    }
  */
}