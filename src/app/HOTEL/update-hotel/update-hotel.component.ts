import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HotelService } from "../hotel-services/hotel.service";

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

  fetchHotelDetails(hotelId: string): void {
    this.hotelService.getHotelById(hotelId).subscribe(
      (response) => {
        this.hotelName = response.HotelName || "";
        this.hotelAddress = response.HotelAddress || this.hotelAddress;
        this.hotelRating = response.HotelRating || 0;
        this.hotelAmenities = response.HotelAmenities || this.hotelAmenities;
        this.hotelDescription = response.HotelDescription || this.hotelDescription;
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
  
  

  addImageField(): void {
    this.hotelDescription.Images.push("");
  }

  removeImageField(index: number): void {
    if (this.hotelDescription.Images.length > 1) {
      this.hotelDescription.Images.splice(index, 1);
    }
  }

  onUpdate(): void {
    const updatedHotel = {
      hotelName: this.hotelName,
      Country: this.hotelAddress.Country,
      City: this.hotelAddress.City,
      Province: this.hotelAddress.Province,
      PostalCode: this.hotelAddress.PostalCode,
      rating: this.hotelRating,
      Pool: this.hotelAmenities.Pool,
      Gym: this.hotelAmenities.Gym,
      AirportShuttle: this.hotelAmenities.AirportShuttle,
      Pets: this.hotelAmenities.Pets,
      Images: this.hotelDescription.Images,
      description: this.hotelDescription,
      AirportDistance: this.hotelDetails.AirportDistance,
      DowntownDistance: this.hotelDetails.DowntownDistance,
      SeaDistance: this.hotelDetails.SeaDistance,
    };

    this.hotelService.updateHotel(this.hotelId, updatedHotel).subscribe(
      (response) => {
        this.router.navigate(["/hotel-list"]);
      },
      (error) => {
        console.error("Error occurred while updating hotel:", error);
      }
    );
  }
}
