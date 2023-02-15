import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from './../../services/counter.service';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})

export class ProductitemComponent implements OnInit  {
  @Input() data:any={};
 constructor(private counterservices:CounterService){}
  ngOnInit(): void {
    this.counterservices.data$.subscribe(res=>this.data1=res)
  }
  data1!:number;
 increase(){
  this.counterservices.increase();
 }
}
