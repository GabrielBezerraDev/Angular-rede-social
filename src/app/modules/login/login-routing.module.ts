import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
import { loginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path: "home",
    loadChildren: () => import("../home/home.module").then((m) => m.HomeModule),
    canActivate: [loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
