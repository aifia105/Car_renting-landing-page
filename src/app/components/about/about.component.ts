import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';
import { ScrollDispatcher } from '@angular/cdk/scrolling';


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
  
  

  
}