
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../ADMIN/guard/auth.guard";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HotelListComponent } from "../HOTEL/hotel-list/hotel-list.component";
import { AddHotelComponent } from "../HOTEL/add-hotel/add-hotel.component";
import { AdminAuthGuardService } from "../ADMIN/admin-guard/admin-auth-guard.service";
import { RoomListComponent } from "../ROOM/room-list/room-list.component";
import { AddRoomComponent } from "../ROOM/add-room/add-room.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "add-hotel", component: AddHotelComponent, canActivate: [AdminAuthGuardService] },
  { path: "add-room", component: AddRoomComponent, canActivate: [AdminAuthGuardService] },
  {path:"add-room/:hotelId", component: AddRoomComponent, canActivate: [AdminAuthGuardService]},
  { path: "hotel-list", component: HotelListComponent, canActivate: [AuthGuard] },
  { path: "room-list", component: RoomListComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
