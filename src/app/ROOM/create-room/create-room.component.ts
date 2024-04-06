import { Component, OnInit } from "@angular/core";
import { RoomService } from "../../SERVICE/room-services/room-services.service";
import { Router } from "@angular/router";
import { RoomOption } from "../../INTERFACE/room.interface";

@Component({
  selector: "app-create-room",
  templateUrl: "./create-room.component.html",
  styleUrls: ["./create-room.component.css"],
})
export class CreateRoomComponent implements OnInit {
  roomOption: RoomOption = {
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
  };

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.roomService.createRoom(this.roomOption).subscribe(
      (response) => {
        console.log("Room option created successfully:", response);
        this.router.navigate(["/room-list"]);
      },
      (error) => {
        console.error("Error occurred while creating room option:", error);
      }
    );
  }

  addImageField(): void {
    this.roomOption.RoomImages.push("");
  }

  removeImageField(imageIndex: number): void {
    this.roomOption.RoomImages.splice(imageIndex, 1);
  }

  cancel(): void {
    this.router.navigate(["/dashboard"]);
  }
}
