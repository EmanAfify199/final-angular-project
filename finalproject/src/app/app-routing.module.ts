import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { FormtoaddComponent } from './components/formtoadd/formtoadd.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';

const routes: Routes = [
  // {path:"/",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"product", component:ProductpageComponent},
  {path:"product/:id",component:DetailproductComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"formadd",component:FormtoaddComponent},
  {path:"formadd/:id",component:FormtoaddComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
