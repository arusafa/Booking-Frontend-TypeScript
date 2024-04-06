import { Component } from "@angular/core";
import { Room } from "../../INTERFACE/room.interface";
import { HotelService } from "../../SERVICE/hotel-services/hotel.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-hotel-rooms",
  templateUrl: "./hotel-rooms.component.html",
  styleUrl: "./hotel-rooms.component.css",
})
export class HotelRoomsComponent {
  rooms: Room[] = [];

  constructor(private hotelService: HotelService, private router:Router) {}

  ngOnInit(): void {}

  findHotelRooms(hotelId: string, roomId: string) {
    this.hotelService.getRoomsForHotel(hotelId,roomId).subscribe({
      next: (rooms) => {
        this.rooms = rooms;
        console.log(this.rooms);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  getRoomId(room: any): string {
    return room._id;
  }

  cancel() {
    this.router.navigate(["/hotel-list"]);
  }
}
