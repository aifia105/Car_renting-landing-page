import { CommonModule, DOCUMENT } from '@angular/common';
import {  Component, HostListener, Inject, OnInit, inject, signal } from '@angular/core';
import { SearchMobileComponent } from '../search-mobile/search-mobile.component';
import {  RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , SearchMobileComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
 isMenuCollapsed: boolean = false;
 isAvatarCollapsed: boolean = false;
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


  openMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  openAvatar() {
    this.isAvatarCollapsed = !this.isAvatarCollapsed;
  }



}
