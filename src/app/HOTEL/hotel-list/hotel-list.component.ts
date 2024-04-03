import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-services/hotel.service';
import { RoomService } from '../../ROOM/room-services/room-services.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  constructor(private hotelService: HotelService, private roomService: RoomService) { }

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
}
