import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app-compponent/app.component";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { HotelListComponent } from "../../HOTEL/hotel-list/hotel-list.component";
import { CreateHotelComponent } from "../../HOTEL/create-hotel/create-hotel.component";
import { UpdateHotelComponent } from "../../HOTEL/update-hotel/update-hotel.component";
import { AuthGuard } from "../ADMIN/guard/auth.guard";
import { AdminAuthGuardService } from "../ADMIN/admin-guard/admin-auth-guard.service";
import { CreateRoomComponent } from "../../ROOM/create-room/create-room.component";
import { RoomListComponent } from "../../ROOM/room-list/room-list.component";
import { AddRoomToHotelComponent } from "../../HOTEL/add-room-to-hotel/add-room-to-hotel.component";
import { ViewARoomComponent } from "../../ROOM/view-a-room/view-a-room.component";
import { UpdateARoomComponent } from "../../ROOM/update-a-room/update-a-room.component";

// Define application routes here
const appRoutes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "create-hotel",
    component: CreateHotelComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "create-room",
    component: CreateRoomComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "add-room/:hotelId",
    component: AddRoomToHotelComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "update-hotel/:id",
    component: UpdateHotelComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "hotel-list",
    component: HotelListComponent,
    canActivate: [AuthGuard],
  },
  { path: "room-list", component: RoomListComponent, canActivate: [AuthGuard] },
  {
    path: "update-room/:id",
    component: UpdateARoomComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "view-room/:id",
    component: ViewARoomComponent,
    canActivate: [AdminAuthGuardService],
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HotelListComponent,
    CreateHotelComponent,
    UpdateHotelComponent,
    CreateRoomComponent,
    RoomListComponent,
    AddRoomToHotelComponent,
    ViewARoomComponent,
    UpdateARoomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
