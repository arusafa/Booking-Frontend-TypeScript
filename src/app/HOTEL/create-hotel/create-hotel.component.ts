import { Component } from "@angular/core";
import { HotelService } from "../../SERVICE/hotel-services/hotel.service";
import { Router } from "@angular/router";
import { Room } from "../../INTERFACE/room.interface";
import { Hotel } from "../../INTERFACE/hotel.interface";

@Component({
  selector: "app-create-hotel",
  templateUrl: "./create-hotel.component.html",
  styleUrls: ["./create-hotel.component.css"],
})
export class CreateHotelComponent {
  hotel: Hotel = {
    hotelName: "",
    hotelAddress: {
      Country: "",
      City: "",
      Province: "",
      PostalCode: "",
    },
    hotelRating: 0,
    hotelAmenities: {
      Pool: false,
      Gym: false,
      AirportShuttle: false,
      Pets: false,
    },
    hotelDescription: {
      Images: [""],
      Description: "",
    },
    hotelDetails: {
      AirportDistance: 0,
      DowntownDistance: 0,
      SeaDistance: 0,
    },
    rooms: [],
  };

  constructor(private hotelService: HotelService, private router: Router) {}

  onSubmit(): void {
    // Implementation of submitting the hotel data
    this.hotelService.createHotel(this.hotel).subscribe(
      (response) => {
        console.log("Hotel created successfully:", response);
        this.router.navigate(["/hotel-list"]);
      },
      (error) => {
        console.error("Error occurred while creating hotel:", error);
      }
    );
  }
  getRoom_Id(room: any): string {
    return room._id;
  }

  addImageField(): void {
    this.hotel.hotelDescription.Images.push("");
  }

  removeImageField(index: number): void {
    this.hotel.hotelDescription.Images.splice(index, 1);
  }

  cancel(): void {
    this.router.navigate(["/dashboard"]);
  }

  addRoom(room: Room): void {
    this.hotel.rooms.push(room);
  }
}
