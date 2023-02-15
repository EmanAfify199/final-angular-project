import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  baseurl="http://localhost:5000/user";
  constructor(private client:HttpClient) { }

  getAllProduct(){

    return this.client.get(this.baseurl);
  };
  
  postData(user:any){
    return this.client.post(this.baseurl,user);
  }

}
