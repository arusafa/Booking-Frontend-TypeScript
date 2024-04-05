import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HotelService } from "../../SERVICE/hotel-services/hotel.service";

@Component({
  selector: "app-update-hotel",
  templateUrl: "./update-hotel.component.html",
  styleUrls: ["./update-hotel.component.css"],
})
export class UpdateHotelComponent implements OnInit {
  hotelId: string = "";
  hotelName: string = "";
  hotelAddress: any = { Country: "", City: "", Province: "", PostalCode: "" };
  hotelRating: number = 0;
  hotelAmenities: any = {
    Pool: "No",
    Gym: "No",
    AirportShuttle: "No",
    Pets: "No",
  };
  hotelDescription: any = {
    Images: [""],
    Description: "",
  };
  hotelDetails: any = {
    AirportDistance: "",
    DowntownDistance: "",
    SeaDistance: "",
  };
  dataLoaded: boolean = false; // Flag to indicate when data is loaded.
  
  roomData: any[] = [{
    RoomName: "",
    Price: 0,
    NumberOfBeds: 0,
    BedType: { Single: 0, Double: 0, Queen: 0, King: 0 },
    SquareFeet: 0,
    RoomAmenities: {
      Wifi: "No",
      CableTv: "No",
      FreeCancellation: "No",
      NonSmoking: "No",
    },
  }];

  constructor(
    private hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.hotelId = params["id"];
        this.fetchHotelDetails(this.hotelId);
        console.log("Hotel ID:", this.hotelId);
      } else {
        console.error("Hotel ID is not specified in the route parameters.");
      }
    });
  }
  addRoom(): void {
    this.roomData.push({
      RoomName: "",
      Price: 0,
      NumberOfBeds: 0,
      BedType: { Single: 0, Double: 0, Queen: 0, King: 0 },
      SquareFeet: 0,
      RoomAmenities: {
        Wifi: "No",
        CableTv: "No",
        FreeCancellation: "No",
        NonSmoking: "No",
      },
      RoomMeals:{
        Breakfast: "No",
        Dinner: "No",
        BreakfastAndDinner: "No",
      },
      RoomImages: [""]
    });
    console.log(this.roomData); // Add this line
  }
  
  removeRoom(index: number): void {
    if (this.roomData.length > 1) {
      this.roomData.splice(index, 1);
      console.log(this.roomData); // Add this line
    }
  }

  fetchHotelDetails(hotelId: string): void {
    this.hotelService.getHotelById(hotelId).subscribe(
      (response) => {
        this.hotelName = response.HotelName || "";
        this.hotelAddress = response.HotelAddress || this.hotelAddress;
        this.hotelRating = response.HotelRating || 0;
        this.hotelAmenities = response.HotelAmenities || this.hotelAmenities;
        this.hotelDescription =
          response.HotelDescription || this.hotelDescription;
        this.hotelDetails = response.HotelDetails || this.hotelDetails;
        this.dataLoaded = true;
        console.log("Hotel details:", response);
      },
      (error) => {
        console.error("Error occurred while fetching hotel details:", error);
        this.dataLoaded = true;
      }
    );
  }
  cancel(): void {
    this.router.navigate(["/hotel-list"]);
  }

  onUpdate(): void {
    // Prepare the updated hotel object
    const updatedHotel = {
      HotelName: this.hotelName,
      HotelAddress: {
        Country: this.hotelAddress.Country,
        City: this.hotelAddress.City,
        Province: this.hotelAddress.Province,
        PostalCode: this.hotelAddress.PostalCode,
      },
      HotelRating: this.hotelRating,
      HotelAmenities: {
        Pool: this.hotelAmenities.Pool,
        Gym: this.hotelAmenities.Gym,
        AirportShuttle: this.hotelAmenities.AirportShuttle,
        Pets: this.hotelAmenities.Pets,
      },
      HotelDescription: {
        Images: this.hotelDescription.Images,
        Description: this.hotelDescription.Description,
      },
      HotelDetails: {
        AirportDistance: this.hotelDetails.AirportDistance,
        DowntownDistance: this.hotelDetails.DowntownDistance,
        SeaDistance: this.hotelDetails.SeaDistance,
      },
    };

    // Call the update service method
    this.hotelService.updateHotel(this.hotelId, updatedHotel).subscribe(
      (response) => {
        // Navigate to the hotel list or show a success message
        this.router.navigate(["/hotel-list"]);
      },
      (error) => {
        // Handle errors, e.g., show an error message
        console.error("Error occurred while updating hotel:", error);
      }
    );
  }

  addImageField(): void {
    this.hotelDescription.Images.push("");
  }

  removeImageField(index: number): void {
    if (this.hotelDescription.Images.length > 1) {
      this.hotelDescription.Images.splice(index, 1);
    }
  }
}
