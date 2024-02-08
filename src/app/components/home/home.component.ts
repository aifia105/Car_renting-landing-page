import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { CarsComponent } from '../cars/cars.component';
import { AboutComponent } from '../about/about.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { FooterComponent } from '../footer/footer.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { ActivatedRoute } from '@angular/router';
import { WhyComponent } from '../why/why.component';
import { ContactComponent } from '../contact/contact.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, CarsComponent, AboutComponent, TestimonialComponent, FooterComponent, BackToTopComponent, WhyComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  activeRoute  = inject(ActivatedRoute);
  constructor(private renderer: Renderer2, private el: ElementRef ) { }

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((fragment) => {
      this.JumpToSection(fragment);
     
    })
  }

 
  JumpToSection(section: any) {
    const element = this.el.nativeElement.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }

}
