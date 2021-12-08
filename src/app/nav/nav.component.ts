import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    
  }

}