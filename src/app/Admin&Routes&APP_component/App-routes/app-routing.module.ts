import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Auth imports
import { AdminAuthGuardService } from "../ADMIN/admin-guard/admin-auth-guard.service";
import { AuthGuard } from "../ADMIN/guard/auth.guard";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

// Hotel imports
import { CreateHotelComponent } from "../../HOTEL/create-hotel/create-hotel.component";
import { HotelListComponent } from "../../HOTEL/hotel-list/hotel-list.component";
import { UpdateHotelComponent } from "../../HOTEL/update-hotel/update-hotel.component";
// Hotel Room imports
import { AddRoomToHotelComponent } from "../../HOTEL/add-room-to-hotel/add-room-to-hotel.component";

// Room imports
import { CreateRoomComponent } from "../../ROOM/create-room/create-room.component";
import { RoomListComponent } from "../../ROOM/room-list/room-list.component";
import { UpdateRoomComponent } from "../../ROOM/update-room/update-room.component";
import { HotelRoomsComponent } from "../../HOTEL/hotel-rooms/hotel-rooms.component";
import { ViewRoomComponent } from "../../ROOM/view-room/view-room.component";

// Define application routes here
const routes: Routes = [
  // Aut routes
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  // Hotel routes
  {
    path: "create-hotel",
    component: CreateHotelComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "hotel-list",
    component: HotelListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "update-hotel/:id",
    component: UpdateHotelComponent,
    canActivate: [AdminAuthGuardService],
  },
  // Hotel Room imports
  {
    path: "addRoom/:hotelId",
    component: AddRoomToHotelComponent,
    canActivate: [AdminAuthGuardService],
  },
  // Room routes
  {
    path: "create-room",
    component: CreateRoomComponent,
    canActivate: [AdminAuthGuardService],
  },

  { path: "room-list", component: RoomListComponent, canActivate: [AuthGuard] },
  {
    path: "view-room/:id",
    component: ViewRoomComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "update-room/:id",
    component: UpdateRoomComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: "hotelRooms/:hotelId",
    component: HotelRoomsComponent,
    canActivate: [AdminAuthGuardService],
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
