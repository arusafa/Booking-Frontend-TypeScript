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
  deleteThisHotel(hotelId: string): void {
    this.hotelService.deleteHotel(hotelId).subscribe(
      (response) => {
        console.log("Hotel deleted:", response);
        this.fetchHotels();
      },
      (error) => console.error("Error deleting hotel:", error)
    );
  }
}
