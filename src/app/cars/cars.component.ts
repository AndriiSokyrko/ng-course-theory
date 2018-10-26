import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CarsComponent implements OnInit {
    cars: { name: string, year: number, color: string, status: string, sale: boolean }[] = [
        {name: 'Audi', year: 2010, color: 'blue', status: 'Good', sale: true},
        {name: 'Toyota', year: 2012, color: 'grey', status: 'excelent', sale: false},
        {name: 'BMW', year: 2015, color: 'black', status: 'sos-so', sale: false}
    ];


    constructor() {
    }

    ngOnInit() {
    }

    updateCarLst(car: { name: string, year: number, color: string, status: string, sale: boolean }) {
        this.cars.push(car);
    }


}
