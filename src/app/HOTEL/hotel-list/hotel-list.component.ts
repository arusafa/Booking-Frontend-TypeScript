import { Component, OnInit } from "@angular/core";
import { HotelService } from "../hotel-services/hotel.service";
import { RoomService } from "../../ROOM/room-services/room-services.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.css"],
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  hotelId: string = "";
  currentHotelIndex: number = 0;
  roomIds: string[] = [];
  constructor(
    private hotelService: HotelService,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels(): void {
    this.hotelService.getAllHotels().subscribe(
      (hotelsData) => {
        this.hotels = hotelsData;

        this.hotels.forEach((hotel, hotelIndex) => {
          // Fetch rooms for each hotel
          this.roomIds.forEach((roomId: string) => {
            this.hotelService.getRoomsForHotel(hotel.id, roomId).subscribe(
              (roomData) => {
                // Initialize the rooms array if it doesn't exist
                if (!this.hotels[hotelIndex].rooms) {
                  this.hotels[hotelIndex].rooms = [];
                }
                this.hotels[hotelIndex].rooms.push(roomData);
                console.log("Room data for hotel:", roomData);
              },
              (error) => console.error("Error fetching room for hotel:", error)
            );
          });
        });

        console.log("Hotels:", this.hotels);
      },
      (error) => console.error("Error fetching hotels:", error)
    );
  }

  fetchRoomsByHotelId(hotelId: string, roomId: string): void {
    this.hotelService.getRoomsForHotel(hotelId, roomId).subscribe(
      (data) => {
        console.log("Rooms for hotel:", data);
      },
      (error) => console.error("Error fetching rooms:", error)
    );
  }

  onEditRoute() {
    this.router.navigate(["update-hotel/:id"]);
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
