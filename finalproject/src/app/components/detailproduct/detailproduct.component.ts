import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MyproductsService } from './../../services/myproducts.service';
@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
   product:any={}
  constructor(private route:ActivatedRoute,private productservices:MyproductsService){}

  ngOnInit(): void {
    this.route.params.subscribe((params)  =>{
      console.log(params['id']);
      this.productservices.getProductById(params['id']).subscribe((Response)=>{
        console.log(Response)
        this.product=Response;
      })
    })

   

}}
