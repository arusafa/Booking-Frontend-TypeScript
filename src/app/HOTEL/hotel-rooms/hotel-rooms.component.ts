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
  hotelId: string = "";
  rooms: Room[] = [];

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['_id']) {
        this.hotelId = params['_id'];
        console.log("Hotel ID:", this.hotelId);
        this.fetchRooms();
        console.log("Hotel ID:", this.hotelId);
      }
    });
  }

  fetchRooms(): void {
    this.hotelService.getRoomsByHotelId(this.hotelId).subscribe({
      next: (data) => {
        this.rooms = data;
        console.log('Rooms:', this.rooms);
      },
      error: (error) => {
        console.error('There was an error fetching the rooms', error);
      },
    });
  }
}
