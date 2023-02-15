import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductitemComponent } from './components/productitem/productitem.component';
import { MyproductsService } from './services/myproducts.service';
import {HttpClientModule} from '@angular/common/http';
import { WhoComponent } from './components/who/who.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormtoaddComponent } from './components/formtoadd/formtoadd.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ProductsComponent,
    ProductitemComponent,
    WhoComponent,
    FooterComponent,
    HomeComponent,
    ProductpageComponent,
    NotfoundComponent,
    LoginComponent,
    DashboardComponent,
    
    FormtoaddComponent,
    DetailproductComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MyproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
