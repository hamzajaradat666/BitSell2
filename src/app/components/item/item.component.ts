import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  desc:String;
  price:String;

  constructor() {

    this.desc="Some Random Text";
    this.price="400";
    this.price+="$"
    
   }

  ngOnInit() {
  }

}
