import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialSliderComponent implements AfterViewInit {
  testimonialsDemoData = [
    {
      message :'They truly exceeded my expections and made my car rental experience a delight',
      avatar: 'assets/testimonial/avatar.png',
      name: 'John Doe',
      job : 'Phoyographer'
    },
    {
      message :'Best car rental experience I have ever had. The staff was very friendly and professional.',
      avatar: 'assets/testimonial/avatar.png',
      name: 'Eva Smith',
      job : 'Designer'
    }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngAfterViewInit(): void {
    const swiper = this.el.nativeElement.querySelector('.swiper-container');
    if(swiper){
      Object.assign(swiper, this.swiperConfig)
    }
  }

  swiperConfig = {
    slidesPerView: 1 ,
    
   
    on: {
      init() {
      },
    },
  };

}
