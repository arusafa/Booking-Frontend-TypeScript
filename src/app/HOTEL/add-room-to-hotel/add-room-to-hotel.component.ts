import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Room } from "../../INTERFACE/room.interface";
import { HotelService } from "../../SERVICE/hotel-services/hotel.service";
import { SharedService } from "../../SERVICE/room-update/shared-service.service";

@Component({
  selector: "app-add-room-to-hotel",
  templateUrl: "./add-room-to-hotel.component.html",
  styleUrls: ["./add-room-to-hotel.component.css"],
})
export class AddRoomToHotelComponent implements OnInit {
  hotelId: string = "";
  room: Room = {
    RoomOptions: [{
      RoomName: "",
      SquareFeet: 0,
      RoomMeals: {
        Breakfast: false,
        Dinner: false,
        BreakfastAndDinner: false,
      },
      RoomAmenities: {
        Wifi: false,
        CableTv: false,
        AirCondition: false,
        FreeCancellation: false,
        NonSmoking: false,
      },
      RoomImages: [""],
      NumberOfBeds: 0,
      NumOfEmptyRooms: 0,
      Price: 0,
      NumberOfGuests: 0,
      BedType: {
        SingleBed: false,
        TwinBed: false,
        QueenBed: false,
        KingBed: false,
      },
    }],
  };

  constructor(
    private hotelService: HotelService,
    private roomUpdateService: SharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["hotelId"]) {
        this.hotelId = params["hotelId"];
        console.log("Hotel ID for adding room:", this.hotelId);
      } else {
        console.error("Hotel ID is not specified in the route parameters.");
      }
    });
  }

  addRoomOption(): void {
    this.room.RoomOptions.push({
      RoomName: "",
      SquareFeet: 0,
      RoomMeals: {
        Breakfast: false,
        Dinner: false,
        BreakfastAndDinner: false,
      },
      RoomAmenities: {
        Wifi: false,
        CableTv: false,
        AirCondition: false,
        FreeCancellation: false,
        NonSmoking: false,
      },
      RoomImages: [""],
      NumberOfBeds: 0,
      NumOfEmptyRooms: 0,
      Price: 0,
      NumberOfGuests: 0,
      BedType: {
        SingleBed: false,
        TwinBed: false,
        QueenBed: false,
        KingBed: false,
      },
    });
  }

  removeRoomOption(index: number): void {
    this.room.RoomOptions.splice(index, 1);
  }

  addRoom(): void {
    if (!this.hotelId) {
      alert("Hotel ID is not provided.");
      return;
    }

    this.hotelService.addRoomToHotel(this.hotelId, this.room).subscribe({
      next: (newRoom) => {
        console.log("Room added successfully to hotel:", this.hotelId, newRoom);
        this.roomUpdateService.notifyRoomAdded(this.hotelId);
        this.router.navigate(["/hotel-list"]);
      },
      error: (error) => {
        console.error("Error adding room to hotel:", error);
        alert("Error adding room. Please try again.");
      },
    });
  }

  addImageField(optionIndex: number): void {
    this.room.RoomOptions[optionIndex].RoomImages.push("");
  }

  removeImageField(optionIndex: number, imageIndex: number): void {
    if (this.room.RoomOptions[optionIndex].RoomImages.length > 1) {
      this.room.RoomOptions[optionIndex].RoomImages.splice(imageIndex, 1);
    }
  }

  cancel(): void {
    this.router.navigate(["/hotel-list"]);
  }
}
