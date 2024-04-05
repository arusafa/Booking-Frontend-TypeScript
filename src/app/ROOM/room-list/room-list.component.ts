import { Component, OnInit } from "@angular/core";
import { RoomService } from "../../SERVICE/room-services/room-services.service";
import { Room } from "../../INTERFACE/room.interface";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.css"],
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.fetchRooms();
  }
  getRoomId(room: any): string {
    return room._id;
  }

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data: any[]) => {
        this.rooms = data;
        console.log("Rooms fetched successfully:", this.rooms);
      },
      error: (error) => {
        console.error("Error fetching room data:", error);
      },
    });
  }
}
