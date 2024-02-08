import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { LocationSelectionComponent } from '../location-selection/location-selection.component';
import { DateSelectionComponent } from '../date-selection/date-selection.component';
import { HoursSelectionComponent } from '../hours-selection/hours-selection.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [LocationSelectionComponent, CommonModule, DateSelectionComponent, HoursSelectionComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  activeSearch: boolean = false;
  number: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    console.log(this.activeSearch);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.number = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.activeSearch = this.number > 800;
  }

  
}
