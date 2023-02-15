import { Component, OnInit } from '@angular/core';
import { MyproductsService } from './../../services/myproducts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  counterFromProductitem:any;
allProduct:any;
constructor(private productservice:MyproductsService){}
ngOnInit(): void {
  this.productservice.getAllProduct().subscribe((Response)=>{
    this.allProduct=Response;
  })
}


}
