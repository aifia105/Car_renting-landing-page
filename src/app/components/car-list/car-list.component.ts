import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  cars = [
    {
      id:'1',
      type: 'Hatchback',
      name: 'Ford Focus',
      price: 29,
      stars: 3.5,
      image: 'assets/carSlider/car01.svg',
      info : [
        {
          icon: 'assets/icons/carSlider/gearshift.svg',
          text: 'Manual',
        },
        {
          icon: 'assets/icons/carSlider/seat.svg',
          text: '5 Seats',
        },
        {
          icon: 'assets/icons/carSlider/gas.svg',
          text: 'Gas',
        },
        {
          icon: 'assets/icons/carSlider/engine.svg',
          text: '1600 HP',
        },
        {
          icon: 'assets/icons/carSlider/wheel.svg',
          text: 'Front',
        },
      ]
    },
    {
      id:'1',
      type: 'Sedan',
      name: 'Toyota Corolla',
      price: 25,
      stars: 5,
      image: 'assets/carSlider/car02.svg',
      info : [
        {
          icon: 'assets/icons/carSlider/gearshift.svg',
          text: 'Manual',
        },
        {
          icon: 'assets/icons/carSlider/seat.svg',
          text: '5 Seats',
        },
        {
          icon: 'assets/icons/carSlider/gas.svg',
          text: 'Gas',
        },
        {
          icon: 'assets/icons/carSlider/engine.svg',
          text: '1600 HP',
        },
        {
          icon: 'assets/icons/carSlider/wheel.svg',
          text: 'Front',
        },
      ]
    },
    {
      id:'1',
      type: 'SUV',
      name: 'Honda CR-V',
      price: 35,
      stars: 4.5,
      image: 'assets/carSlider/car03.svg',
      info : [
        {
          icon: 'assets/icons/carSlider/gearshift.svg',
          text: 'Automatic',
        },
        {
          icon: 'assets/icons/carSlider/seat.svg',
          text: '5 Seats',
        },
        {
          icon: 'assets/icons/carSlider/gas.svg',
          text: 'Gas',
        },
        {
          icon: 'assets/icons/carSlider/engine.svg',
          text: '1600 HP',
        },
        {
          icon: 'assets/icons/carSlider/wheel.svg',
          text: 'All',
        },
      ]
    },
    {
      id:'1',
      type: 'Convertible',
      name: 'Madza MX-5',
      price: 32,
      stars: 4.2,
      image: 'assets/carSlider/car02.svg',
      info : [
        {
          icon: 'assets/icons/carSlider/gearshift.svg',
          text: 'Manual',
        },
        {
          icon: 'assets/icons/carSlider/seat.svg',
          text: '5 Seats',
        },
        {
          icon: 'assets/icons/carSlider/gas.svg',
          text: 'Gas',
        },
        {
          icon: 'assets/icons/carSlider/engine.svg',
          text: '1600 HP',
        },
        {
          icon: 'assets/icons/carSlider/wheel.svg',
          text: 'All',
        },
      ]
    },
    
  ];

  private router = inject(Router);
  
  getCarStars(stars: number){
    return Array(Math.round(stars)).fill(0);
  }

  navigateToCar(id: string){
    this.router.navigate(['/car', id]);
  }
}
