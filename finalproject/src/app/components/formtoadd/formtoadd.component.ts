import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyproductsService } from './../../services/myproducts.service';

@Component({
  selector: 'app-formtoadd',
  templateUrl: './formtoadd.component.html',
  styleUrls: ['./formtoadd.component.css']
})
export class FormtoaddComponent {
  formerror:string="";
  productId:any;
  constructor(private router:Router , private productServices:MyproductsService, private activatedroute:ActivatedRoute){
    this.productId=this.activatedroute.snapshot.params['id']
  }

get getsrc(){
  return this.addform.controls.src;
};

get getname(){
  return this.addform.controls.name;
};

get getdesc(){
  return this.addform.controls.desc;
};

get getprice(){
  return this.addform.controls.price;
};

get getquantity(){
  return this.addform.controls.quantity;
}
addform= new FormGroup({
  src:new FormControl("",[Validators.required]),
  name:new FormControl("",[Validators.required]),
  desc:new FormControl("",Validators.required),
  price:new FormControl("",[Validators.required]),
  quantity:new FormControl("",[Validators.required])
});

addproduct(){
  if(this.addform.status=="VALID"&& this.productId){
    this.productServices.editProduct(this.productId,this.addform.value).subscribe((Response)=>{
      console.log(Response)
      this.router.navigate(['/dashboard'])
    })
  } else if(this.addform.status=="VALID"){
    this.productServices.addProduct(this.addform.value).subscribe((Response)=>{
      console.log(Response);
      this.router.navigate(['/dashboard'])
     });

    }else{
    console.log("unvalid")
    this.formerror="some thing error";
  }
}

}
