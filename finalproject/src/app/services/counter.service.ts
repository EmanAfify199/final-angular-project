import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() {}
   
   counter:number=0;
   private data=new BehaviorSubject(0);
   data$=this.data.asObservable();

   increase(){
    if(this.counter>=0){
      this.counter +=1
      this.data.next(this.counter)
    }
   }
   
}
