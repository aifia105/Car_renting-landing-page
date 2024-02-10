import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrandsComponent } from '../brands/brands.component';
import { CarSliderComponent } from '../car-slider/car-slider.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [BrandsComponent, CarSliderComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarsComponent {

}
