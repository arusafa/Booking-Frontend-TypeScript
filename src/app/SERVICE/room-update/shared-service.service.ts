import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private roomAddedSource = new Subject<string>();
  roomAdded$ = this.roomAddedSource.asObservable();

  constructor() {}
  // Call this method when a room is added
  notifyRoomAdded(hotelId: string) {
    this.roomAddedSource.next(hotelId);
  }
}