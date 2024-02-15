import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-car-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-slider.component.html',
  styleUrl: './car-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarSliderComponent implements AfterViewInit {
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
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  private router = inject(Router);




  ngAfterViewInit(): void {
    const swiper = this.el.nativeElement.querySelector('.swiper-container');
    if(swiper){
      Object.assign(swiper, this.swiperConfig)
    }
  }
  swiperConfig = {
    slidesPerView: 1 ,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1260: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    on: {
      init() {
      },
    },
  };
  
  getCarStars(stars: number){
    return Array(Math.round(stars)).fill(0);
  }

  navigateToCar(id: string){
    this.router.navigate(['/car', id]);
  }
  


 

  


 
}
