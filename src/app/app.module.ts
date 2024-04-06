import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./Admin&Routes&APP_component/app-compponent/app.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./Admin&Routes&APP_component/App-routes/app-routing.module";
import { FormatListPipe } from "./pipes/format-list.pipe";

// Auth imports
import { AdminAuthGuardService } from "./Admin&Routes&APP_component/ADMIN/admin-guard/admin-auth-guard.service";
import { AuthGuard } from "./Admin&Routes&APP_component/ADMIN/guard/auth.guard";
import { LoginComponent } from "./Admin&Routes&APP_component/login/login.component";
import { SignupComponent } from "./Admin&Routes&APP_component/signup/signup.component";
import { DashboardComponent } from "./Admin&Routes&APP_component/dashboard/dashboard.component";

// Hotel imports
import { CreateHotelComponent } from "./HOTEL/create-hotel/create-hotel.component";
import { HotelListComponent } from "./HOTEL/hotel-list/hotel-list.component";
import { UpdateHotelComponent } from "./HOTEL/update-hotel/update-hotel.component";
// Hotel Room imports
import { AddRoomToHotelComponent } from "./HOTEL/add-room-to-hotel/add-room-to-hotel.component";

// Room imports
import { CreateRoomComponent } from "./ROOM/create-room/create-room.component";
import { RoomListComponent } from "./ROOM/room-list/room-list.component";
import { UpdateRoomComponent } from "./ROOM/update-room/update-room.component";
import { HotelRoomsComponent } from "./HOTEL/hotel-rooms/hotel-rooms.component";
import { ViewRoomComponent } from "./ROOM/view-room/view-room.component";

// Define application routes here
const appRoutes: Routes = [
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
    path: "hotel-rooms/:_id",
    component: HotelRoomsComponent,
    canActivate: [AdminAuthGuardService],
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  declarations: [
    //Auth components
    AppComponent,
    SignupComponent,
    LoginComponent,
    //Hotel components
    CreateHotelComponent,
    UpdateHotelComponent,
    HotelListComponent,
    AddRoomToHotelComponent,
    HotelRoomsComponent,
    //Room components
    CreateRoomComponent,
    RoomListComponent,
    
    
    
    
    
    
    FormatListPipe
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
