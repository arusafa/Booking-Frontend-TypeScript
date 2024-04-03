// src/app/app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../ADMIN/guard/auth.guard";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HotelListComponent } from "../HOTEL/hotel-list/hotel-list.component";
import { AddHotelComponent } from "../HOTEL/add-hotel/add-hotel.component";
import { AdminAuthGuardService } from "../ADMIN/admin-guard/admin-auth-guard.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "hotel-list", component: HotelListComponent, canActivate: [AuthGuard] },
  { path: "add-hotel", component: AddHotelComponent, canActivate: [AdminAuthGuardService] },
  { path: "**", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
