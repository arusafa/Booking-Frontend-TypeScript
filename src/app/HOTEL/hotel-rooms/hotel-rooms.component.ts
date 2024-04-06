import { Component, OnInit } from "@angular/core";
import { Room, RoomOption } from "../../INTERFACE/room.interface";
import { HotelService } from "../../SERVICE/hotel-services/hotel.service";
import { Router } from "@angular/router";
import { SharedService } from "../../SERVICE/room-update/shared.service";
import { ExtendedRoom, ExtendedRoomOption } from "../../INTERFACE/extended-room-option";

@Component({
  selector: "app-hotel-rooms",
  templateUrl: "./hotel-rooms.component.html",
  styleUrls: ["./hotel-rooms.component.css"],
})
export class HotelRoomsComponent implements OnInit {
  roomOptions: ExtendedRoomOption[] = [];
  currentHotel: any; 

  constructor(
    private hotelService: HotelService,
    private roomUpdateService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roomUpdateService.roomAdded$.subscribe(() => {
      this.fetchUpdatedRoomOptions();
      console.log('Room added: hotel-rooms', this.getHotelId(this.currentHotel));
    });

    this.fetchUpdatedRoomOptions();
  }

  fetchUpdatedRoomOptions(): void {
    const hotelId = this.currentHotel?._id;
  
    // Debugging: Log the currentHotel object and the extracted hotelId
    console.log('Current Hotel:', this.currentHotel);
    console.log('Extracted Hotel ID:', hotelId);
  
    // Guard clause to check for undefined hotelId
    if (!hotelId) {
      console.error('Hotel ID is undefined, aborting fetch operation');
      return;
    }
  
    this.hotelService.getRoomsByHotelId(hotelId).subscribe({
      next: (rooms) => {
       console.log('Rooms:', rooms);
      },
      error: (err) => {
        console.error('Failed to fetch updated room options:', err);
      },
    });
  }
  
  

  getHotelId(hotel: any): string {
    return hotel._id;
  }

  cancel(): void {
    this.router.navigate(["/hotel-list"]);
  }
}
