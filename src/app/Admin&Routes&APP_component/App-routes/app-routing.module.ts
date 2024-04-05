import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../ADMIN/guard/auth.guard";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HotelListComponent } from "../../HOTEL/hotel-list/hotel-list.component";
import { CreateHotelComponent } from "../../HOTEL/create-hotel/create-hotel.component";
import { AdminAuthGuardService } from "../ADMIN/admin-guard/admin-auth-guard.service";
import { RoomListComponent } from "../../ROOM/room-list/room-list.component";
import { CreateRoomComponent } from "../../ROOM/create-room/create-room.component";
import { UpdateHotelComponent } from "../../HOTEL/update-hotel/update-hotel.component";
import { UpdateARoomComponent } from "../../ROOM/update-a-room/update-a-room.component";
import { ViewARoomComponent } from "../../ROOM/view-a-room/view-a-room.component";
import { AddRoomToHotelComponent } from "../../HOTEL/add-room-to-hotel/add-room-to-hotel.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
