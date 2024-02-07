import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { CarsComponent } from '../cars/cars.component';
import { AboutComponent } from '../about/about.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { CtaComponent } from '../cta/cta.component';
import { FooterComponent } from '../footer/footer.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, CarsComponent, AboutComponent, TestimonialComponent, CtaComponent, FooterComponent, BackToTopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
