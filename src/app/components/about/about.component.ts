import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild, inject } from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent  {
  carTypes: number = 50;
  rentalOutlets : number = 100;
  repairPoints: number = 36;
  
  private router = inject(Router);
  

  navigateToCars(){
    this.router.navigate(['/cars']);
  }

  
}