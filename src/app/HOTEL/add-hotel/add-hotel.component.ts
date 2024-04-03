import { Component } from "@angular/core";
import { HotelService } from "../../services/hotel.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-hotel",
  templateUrl: "./add-hotel.component.html",
  styleUrls: ["./add-hotel.component.css"],
})
export class AddHotelComponent {
  hotelName: string = '';
  hotelAddress: any = {
    Country: '',
    City: '',
    Province: '',
    PostalCode: ''
  };
  hotelRating: number = 0;
  hotelAmenities: any = {
    Pool: "",
    Gym: "",
    AirportShuttle: "",
    Pets: "",
  };
  hotelDescription: any = {
    Images: [],
    Description: ''
  };
  hotelDetails: any = {
    AirportDistance: "",
    DowntownDistance: "",
    SeaDistance: "",
  };
  rooms: string[] = [];

  constructor(private hotelService: HotelService, private router: Router) { }

  onSubmit(): void {
    // Convert amenities to Boolean values
    const hotelAmenitiesBoolean = {
      Pool: this.hotelAmenities.Pool === "Yes" || "No",
      Gym: this.hotelAmenities.Gym === "Yes" || "No",
      AirportShuttle: this.hotelAmenities.AirportShuttle === "Yes" || "No",
      Pets: this.hotelAmenities.Pets === "Yes" || "No",
    };
  
    const hotelData = {
      HotelName: this.hotelName,
      HotelAddress: this.hotelAddress,
      HotelRating: this.hotelRating,
      HotelAmenities: hotelAmenitiesBoolean,
      HotelDescription: this.hotelDescription,
      HotelDetails: this.hotelDetails,
      Rooms: this.rooms 
    };
  
    this.hotelService.createHotel(hotelData).subscribe(
      (response) => {
        console.log('Hotel created successfully:', response);
        this.router.navigate(["/hotel-list"]);
      },
      (error) => {
        console.error('Error occurred while creating hotel:', error);
        // Optionally, display an error message to the user
      }
    );
  }
  

  // Function to add a room to the hotel
  addRoom(roomId: string): void {
    this.rooms.push(roomId);
  }

  // Function to remove a room from the hotel
  removeRoom(roomId: string): void {
    const index = this.rooms.indexOf(roomId);
    if (index !== -1) {
      this.rooms.splice(index, 1);
    }
  }
}
