import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../SERVICE/hotel-services/hotel.service';
import { Room } from '../../INTERFACE/room.interface'; 

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css'],
})
export class HotelRoomsComponent implements OnInit {
  hotelId: string = ""; // Hotel ID
  rooms: Room[] = [];

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.hotelId = params['id'];
        console.log("Hotel ID:", this.hotelId); // Log the hotel ID
        this.fetchRooms();
      }
    });
  }

  fetchRooms(): void {
    this.hotelService.getRoomsByHotelId(this.hotelId).subscribe({
      next: (data) => {
        this.rooms = data;
      },
      error: (error) => {
        console.error('There was an error fetching the rooms', error);
      },
    });
  }
}
