import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SearchComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  activeSearch: boolean = false;
  number: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  ngOnInit(): void {
   
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.number = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.activeSearch = this.number > 800;
  }
}
