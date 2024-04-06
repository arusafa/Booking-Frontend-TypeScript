import { Component, OnInit } from "@angular/core";
import { RoomService } from "../../SERVICE/room-services/room-services.service";
import { Router } from "@angular/router";
import { Room } from "../../INTERFACE/room.interface";
import { HotelService } from "../../SERVICE/hotel-services/hotel.service";

@Component({
  selector: "app-add-room-to-hotel",
  templateUrl: "./add-room-to-hotel.component.html",
  styleUrls: ["./add-room-to-hotel.component.css"],
})
export class AddRoomToHotelComponent implements OnInit {
  room: Room = {
    RoomOptions: [
      {
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
        RoomImages: [],
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
      },
    ],
  };
  hotelId: string = "";

  constructor(
    private roomService: RoomService,
    private router: Router,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {}

  addRoom() {
    if (!this.hotelId) {
      alert("Please provide a hotel ID.");
      return;
    }
    this.hotelService.addRoomToHotel(this.hotelId, this.room).subscribe({
      next: (newRoom) => {
        console.log("Room added successfully", newRoom);
        this.router.navigate(["/hotel-list"]);
      },
      error: (error) => {
        console.error("Error adding room:", error);
        alert("Error adding room. Please try again.");
      },
    });
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  addImageField(optionIndex: number): void {
    this.room.RoomOptions[optionIndex].RoomImages.push("");
  }
  removeImageField(optionIndex: number, imageIndex: number): void {
    this.room.RoomOptions[optionIndex].RoomImages.splice(imageIndex, 1);
  }
  cancel(): void {
    this.router.navigate(["/hotel-list"]);
  }
}
