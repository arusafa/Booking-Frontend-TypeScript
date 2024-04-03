import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-services/hotel.service';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: any[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels(): void {
    this.hotelService.getAllHotels().subscribe(
      data => {
        this.hotels = data;
        console.log('Data:', data);
      },
      error => {
        console.log('Error occurred while fetching hotel data:', error);
      }
    );
  }
}
