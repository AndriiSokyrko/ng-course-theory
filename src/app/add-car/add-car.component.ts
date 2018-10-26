import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
    carName = '';
    carYear = 2017;

    @Output() onAddCar = new EventEmitter<{ name: string, year: number, color: string, status: string }>();
    @ViewChild('carStatus') carStatus: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    addCar(carColor: HTMLInputElement) {
        this.onAddCar.emit({
            name: this.carName,
            year: this.carYear,
            color: carColor.value,
            status: this.carStatus.nativeElement.value
        });

        this.carName = '';
        this.carYear = 2017;
        carColor.value = '';
        this.carStatus.nativeElement.value = '';
    }

}
