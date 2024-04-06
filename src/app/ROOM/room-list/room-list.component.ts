import { Component, OnInit } from "@angular/core";
import { RoomService } from "../../SERVICE/room-services/room-services.service";
import { RoomOption } from "../../INTERFACE/room.interface";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.css"],
})
export class RoomListComponent implements OnInit {
  rooms: RoomOption[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data: RoomOption[]) => {
        this.rooms = data;
        console.log("Rooms fetched successfully:", this.rooms);
      },
      error: (error) => {
        console.error("Error fetching room data:", error);
      },
    });
  }

  // Convert RoomAmenities object to an array of enabled amenities
  getAmenitiesList(amenities: any): string[] {
    return Object.keys(amenities).filter(key => amenities[key]).map(key => this.formatAmenityKey(key));
  }

  // Convert RoomMeals object to an array of enabled meals
  getMealsList(meals: any): string[] {
    return Object.keys(meals).filter(key => meals[key]).map(key => this.formatMealKey(key));
  }

  // Helper function to format amenity keys for display
  private formatAmenityKey(key: string): string {
    return key.replace(/([A-Z])/g, ' $1').trim(); // Adds space before capital letters and trims the result
  }

  // Helper function to format meal keys for display
  private formatMealKey(key: string): string {
    return key.split(/(?=[A-Z])/).join(" "); // Splits camelCase strings into words
  }
}
