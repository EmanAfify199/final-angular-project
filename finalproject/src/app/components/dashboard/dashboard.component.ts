import { Component,OnInit} from '@angular/core';
import { MyproductsService } from './../../services/myproducts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  allProduct:any;
  constructor(private productservice:MyproductsService,private router:Router){}
  ngOnInit(): void {
    this.productservice.getAllProduct().subscribe((Response)=>{
      this.allProduct=Response;
    })
  }


  productDetail(userId:Number){
    console.log(userId)
   this.productservice.getProductById(userId).subscribe((Response)=>{
    console.log(Response);
    this.router.navigate([`/product/${userId}`])
   });
  };

  removeProduct(pId:Number)
  {
    this.productservice.removeProduct(pId).subscribe((Response)=>{
    this.allProduct=  this.allProduct.filter((product:any)=> product._id != pId)

    })

  }

  
  
}
