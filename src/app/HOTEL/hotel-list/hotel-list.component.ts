import { Component, OnInit } from "@angular/core";
import { HotelService } from "../../SERVICE/hotel-services/hotel.service";
import { RoomService } from "../../SERVICE/room-services/room-services.service";
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
  rooms: string[] = [];
  roomId: string = "";
  constructor(
    private hotelService: HotelService,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchHotels();
  }

  onEditRoute() {
    this.router.navigate(["update-hotel/:id"]);
  }

  fetchHotels(): void {
    this.hotelService.getAllHotels().subscribe(
      (hotelsData) => {
        this.hotels = hotelsData;
        console.log("Hotels hotelsData:", hotelsData);
      },
      (error) => console.error("Error fetching hotels:", error)
    );
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

    fetchHotelsAndRooms(): void {
    this.hotelService.getAllHotels().subscribe(
      (hotelsData) => {
        this.hotels = hotelsData;
        console.log("Hotels hotelsData:", hotelsData);
  
        // Initialize 'rooms' as an empty array for each hotel to safely push into later
        this.hotels.forEach((hotel) => {
          hotel.rooms = [];
          console.log("Rooms forEach:", hotel);
        });
  
        // Fetch all rooms and assign them to their respective hotels
        this.roomService.getAllRooms().subscribe(
          (roomsData) => {
            // Here you need to implement logic to match rooms to hotels
            // For demonstration purposes, let's say each room has a hotelId property
            roomsData.forEach((room) => {
              let hotel = this.hotels.find(h => h._id === room.hotelId);
              if(hotel) {
                hotel.rooms.push(room);
                console.log("RoomsData forEach:", room);
              }
            });
          },
          (error) => console.error("Error fetching rooms:", error)
        );
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
  */
}
