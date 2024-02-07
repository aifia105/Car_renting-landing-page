import { CommonModule, DOCUMENT } from '@angular/common';
import {  Component, HostListener, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
 isMenuCollapsed: boolean = true;
 setHeader: boolean = false;
 number: number = 0;
 constructor(@Inject(DOCUMENT) private document: Document) {}
 @HostListener('window:scroll', [])
  onWindowScroll() {
    this.number = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.setHeader = this.number > 40;
  }

 

  ngOnInit() {
   console.log(this.number)
    console.log(this.setHeader)
  }



}
