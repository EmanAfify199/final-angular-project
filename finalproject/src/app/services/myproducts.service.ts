import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyproductsService {
  
baseurl="http://localhost:5000";
  constructor(private client:HttpClient) { }

  getAllProduct(){

    return this.client.get(this.baseurl);
  };

  getProductById(productID:any){
    return this.client.get(`${this.baseurl}/${productID}`);
  };

editProduct(productID:any,product:any){
  return this.client.put(`${this.baseurl}/${productID}`,product)
};

addProduct(product:any){
  return this.client.post(this.baseurl,product)
};

removeProduct(productId:any){
  return this.client.delete(`${this.baseurl}/${productId}`)
}
}


