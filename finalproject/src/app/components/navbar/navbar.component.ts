import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data:any;
  constructor(private counterservices:CounterService){}
  ngOnInit(): void {
    this.counterservices.data$.subscribe(res=> this.data =Number(res))
  }

}
