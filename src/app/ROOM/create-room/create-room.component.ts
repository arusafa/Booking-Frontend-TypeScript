import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomService } from '../../SERVICE/room-services/room-services.service';
import { Router } from '@angular/router';
import { Room } from "../../INTERFACE/room.interface";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent implements OnInit {
  
  room: Room = {
    RoomOptions: [{
      RoomName: '',
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
    }],
  };

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.roomService.createRoom(this.room).subscribe({
      next: (data) => {
        console.log('Room created successfully:', data);
        this.router.navigate(['/room-list']);
      },
      error: (error) => {
        console.error('Error occurred while creating room:', error);
      },
    });
  }
  trackByFn(index: any, item: any) {
    return index;
  }

  addRoomOption(): void {
    this.room.RoomOptions.push({
      RoomName: '',
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
    });
  }

  addImageField(optionIndex: number): void {
    this.room.RoomOptions[optionIndex].RoomImages.push("");
  }  
  
  removeImageField(optionIndex: number, imageIndex: number): void {
    this.room.RoomOptions[optionIndex].RoomImages.splice(imageIndex, 1);
  }

  removeRoomOption(index: number): void {
    this.room.RoomOptions.splice(index, 1);
  }
}
