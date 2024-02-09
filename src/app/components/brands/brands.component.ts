import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  brands :string[] = ['assets/icons/brands/audi.svg','assets/icons/brands/ford.svg' ,'assets/icons/brands/bmw.svg', 'assets/icons/brands/mazda.svg', 'assets/icons/brands/mercedes.svg', 'assets/icons/brands/vw.svg', ];

}
