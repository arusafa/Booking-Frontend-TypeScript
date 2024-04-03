import { Component, OnInit } from "@angular/core";
import { RoomService } from "../room-services/room-services.service";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.css"],
})
export class RoomListComponent implements OnInit {
  rooms: any[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.fetchRooms();
  }
  formatAmenities(amenities: any): string {
    // Convert the amenities object into a string list for display
    return Object.entries(amenities)
      .filter(([key, value]) => key !== "_id" && value) // Filter out the '_id' property and false values
      .map(([key]) => key.replace(/([A-Z])/g, " $1").trim()) // Add space before capital letters for readability
      .join(", "); // Join the array elements into a string separated by commas
      
  }

  formatBedType(bedType: any): string {
    // Convert the bedType object into a string list for display
    return Object.entries(bedType)
      .filter(([key, value]) => key !== "_id" && value) // Filter out the '_id' property and false values
      .map(([key]) => key.replace(/([A-Z])/g, " $1").trim()) // Add space before capital letters for readability
      .join(", "); // Join the array elements into a string separated by commas
  }

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms = data.map((room: any) => ({
          roomId: room.roomId,
          RoomName: room.RoomName,
          SquareFeet: room.SquareFeet,
          RoomAmenities: room.RoomAmenities || '',
          BedType: room.BedType || '', 
          RoomMeals: room.RoomMeals || '', 
          RoomImages: room.RoomImages || '', 
          NumberOfBeds: room.NumberOfBeds,
          NumOfEmptyRooms: room.NumOfEmptyRooms,
          Price: room.Price,
          NumberOfGuests: room.NumberOfGuests,
        }));
        
        console.log("Formatted Rooms Data:", this.rooms);
      },
      error: (error) => {
        console.log("Error occurred while fetching room data:", error);
      },
    });
  }
  
}