import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./App-routes/app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { HotelListComponent } from "./HOTEL/hotel-list/hotel-list.component";
import { AddHotelComponent } from './HOTEL/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './HOTEL/update-hotel/update-hotel.component';
import { AuthGuard } from "./ADMIN/guard/auth.guard";
import { AdminAuthGuardService } from "./ADMIN/admin-guard/admin-auth-guard.service";

// Define application routes here
const appRoutes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "hotel-list", component: HotelListComponent, canActivate: [AdminAuthGuardService] },
  { path: "add-hotel", component: AddHotelComponent, canActivate: [AdminAuthGuardService] },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HotelListComponent,
    AddHotelComponent,
    UpdateHotelComponent,
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
