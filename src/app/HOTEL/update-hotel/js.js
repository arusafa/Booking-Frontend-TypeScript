import React from 'react'

export default function js() {
  return (
    <div>js
        <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="card shadow-lg border-0">
        <div class="card-body">
          <h2 class="text-center mb-5 font-weight-bold">
            Update Hotel Details
          </h2>
          <form (ngSubmit)="onUpdate()" *ngIf="dataLoaded">
            <div class="row">
              <!-- Left Column for Hotel Info -->
              <div class="col-md-6 pr-md-5">
                <div class="form-group">
                  <label for="hotelName" class="font-weight-bold"
                    >Hotel Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="hotelName"
                    [(ngModel)]="hotelName"
                    name="hotelName"
                    placeholder="Enter hotel name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="description" class="font-weight-bold"
                    >Description</label
                  >
                  <textarea
                    class="form-control"
                    id="description"
                    [(ngModel)]="hotelDescription.Description"
                    name="description"
                    rows="4"
                    placeholder="Describe the hotel"
                    required
                  ></textarea>
                </div>

                <!-- Images Section -->
                <div class="form-group">
                  <label class="font-weight-bold">Images</label>
                  <div
                    *ngFor="let image of hotelDescription.Images; let i = index"
                    class="mb-3"
                  >
                    <!-- Display the image -->
                    <div class="d-flex align-items-center">
                      <img
                        [src]="image"
                        class="img-thumbnail mr-2"
                        style="width: 200px; height: auto"
                        onError="this.onerror=null;this.src='fallback-image-url';"
                      />
                      <!-- Input field to update the image URL -->
                      <input
                        type="text"
                        class="form-control"
                        [(ngModel)]="hotelDescription.Images[i]"
                        name="image{{ i }}"
                        placeholder="Enter new image URL"
                      />
                    </div>

                    <!-- Buttons to remove or add image fields -->
                    <div class="mt-2">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        (click)="removeImageField(i)"
                        *ngIf="hotelDescription.Images.length > 1"
                      >
                        Remove
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm ml-2"
                        (click)="addImageField()"
                        *ngIf="i === hotelDescription.Images.length - 1"
                      >
                        Add Another Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 pl-md-5">
                <h4 class="mb-4 font-weight-bold">Location & Amenities</h4>

                <!-- Location Fields -->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="country">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="country"
                      [(ngModel)]="hotelAddress.Country"
                      name="country"
                      placeholder="Country"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="city">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      [(ngModel)]="hotelAddress.City"
                      name="city"
                      placeholder="City"
                      required
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="province">Province</label>
                    <input
                      type="text"
                      class="form-control"
                      id="province"
                      [(ngModel)]="hotelAddress.Province"
                      name="province"
                      placeholder="Province"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="postalCode">Postal Code</label>
                    <input
                      type="text"
                      class="form-control"
                      id="postalCode"
                      [(ngModel)]="hotelAddress.PostalCode"
                      name="postalCode"
                      placeholder="Postal Code"
                      required
                    />
                  </div>
                </div>

                <!-- Amenities -->
                <div class="form-group">
                  <label class="font-weight-bold">Amenities</label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="pool"
                      [(ngModel)]="hotelAmenities.Pool"
                      name="pool"
                    />
                    <label class="form-check-label" for="pool">Pool</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gym"
                      [(ngModel)]="hotelAmenities.Gym"
                      name="gym"
                    />
                    <label class="form-check-label" for="gym">Gym</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="airportShuttle"
                      [(ngModel)]="hotelAmenities.AirportShuttle"
                      name="airportShuttle"
                    />
                    <label class="form-check-label" for="airportShuttle"
                      >Airport Shuttle</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="pets"
                      [(ngModel)]="hotelAmenities.Pets"
                      name="pets"
                    />
                    <label class="form-check-label" for="pets"
                      >Pets Allowed</label
                    >
                  </div>
                </div>

                <!-- Hotel Rating -->
                <div class="form-group">
                  <label for="hotelRating" class="font-weight-bold"
                    >Hotel Rating</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="hotelRating"
                    [(ngModel)]="hotelRating"
                    name="hotelRating"
                    placeholder="0-5"
                    min="0"
                    max="5"
                    step="0.1"
                    required
                  />
                </div>
              </div>

              <!-- Hotel Details-->

              <div class="form-group col-md-6 m-3">
                <label for="AirportDistance">Airport Distance</label>
                <input
                  type="text"
                  class="form-control"
                  id="airportDistance"
                  [(ngModel)]="hotelDetails.AirportDistance"
                  name="airportDistance"
                  placeholder="Airport Distance"
                  required
                />
              </div>

              <div class="form-group col-md-6 m-3">
                <label for="AirportDistance">Downtown Distance</label>
                <input
                  type="text"
                  class="form-control"
                  id="downtownDistance"
                  [(ngModel)]="hotelDetails.DowntownDistance"
                  name="downtownDistance"
                  placeholder="Downtown Distance"
                  required
                />
              </div>

              <div class="form-group col-md-6 m-3">
                <label for="AirportDistance">Sea Distance</label>
                <input
                  type="text"
                  class="form-control"
                  id="seaDistance"
                  [(ngModel)]="hotelDetails.SeaDistance"
                  name="seaDistance"
                  placeholder="Sea Distance"
                  required
                />
              </div>
            </div>

            <!-- Room Details-->
            <!-- Room Details -->
            <div class="col-md-12 mt-4">
              <h4 class="mb-4 font-weight-bold">Room Details</h4>
              <div
                *ngFor="let room of roomData; let i = index"
                class="border p-3 mb-3"
              >
                <div class="form-group">
                  <label for="roomName{{ i }}">Room Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="roomName{{ i }}"
                    [(ngModel)]="room.RoomName"
                    name="roomName{{ i }}"
                    placeholder="Enter room name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="roomName{{ i }}">Room Price</label>
                  <input
                    type="text"
                    class="form-control"
                    id="roomPrice{{ i }}"
                    [(ngModel)]="room.Price"
                    name="roomPrice{{ i }}"
                    placeholder="Enter a room price"
                    required
                  />
                </div>

                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  (click)="removeRoom(i)"
                >
                  Remove Room
                </button>
              </div>
              <button type="button" class="btn btn-primary" (click)="addRoom()">
                Add Room
              </button>
            </div>
              
           

            <!-- Update and Cancel Buttons -->
            <div class="text-center mt-4">
              <button type="submit" class="btn btn-success">
                Update Hotel
              </button>
              <button
                (click)="cancel()"
                type="button"
                class="btn btn-danger ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
