import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input('carItem') car: {name: string, year: number, sale: boolean};
  constructor() { }

  ngOnInit() {
  }
    isSold(type: string) {
// console.log(type);
        this.car.sale = type === 'sold' ? true : false ;
    }
}
